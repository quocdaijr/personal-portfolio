// Blog API service for fetching articles from various sources
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  readTime: string;
  author: string;
  authorImage?: string;
  url: string;
  source: 'dev.to' | 'medium' | 'reddit' | 'hackernews' | 'fallback';
  coverImage?: string;
  slug: string;
}

export interface BlogPostMeta {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  readTime: string;
  author: string;
  authorImage?: string;
  url: string;
  source: 'dev.to' | 'medium' | 'reddit' | 'hackernews' | 'fallback';
  coverImage?: string;
  slug: string;
}

// Cache configuration
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
const CACHE_KEY = 'blog_articles_cache';

interface CacheData {
  articles: BlogPost[];
  timestamp: number;
}

// Utility functions
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Dev.to API
async function fetchDevToArticles(): Promise<BlogPost[]> {
  try {
    const response = await fetch('https://dev.to/api/articles?tag=javascript,react,vue,typescript,webdev&per_page=10&top=7');
    if (!response.ok) throw new Error('Dev.to API failed');
    
    const articles = await response.json();

    return articles.map((article: { id: number; title: string; description?: string; body_markdown?: string; published_at: string; edited_at?: string; tag_list?: string[]; user: { name: string; profile_image?: string }; url: string; cover_image?: string }, index: number) => ({
      id: `devto-${article.id}`,
      title: article.title,
      description: truncateText(article.description || article.title, 160),
      content: article.body_markdown || article.description,
      publishedAt: article.published_at,
      updatedAt: article.edited_at,
      tags: article.tag_list || [],
      category: 'Development',
      featured: index < 3, // First 3 articles are featured
      readTime: calculateReadTime(article.body_markdown || article.description || ''),
      author: article.user.name,
      authorImage: article.user.profile_image,
      url: article.url,
      source: 'dev.to' as const,
      coverImage: article.cover_image,
      slug: createSlug(article.title),
    }));
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return [];
  }
}

// Note: Hashnode API removed due to build issues - can be re-added later if needed

// Hacker News API
async function fetchHackerNewsArticles(): Promise<BlogPost[]> {
  try {
    // Get top stories
    const topStoriesResponse = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    if (!topStoriesResponse.ok) throw new Error('Hacker News API failed');

    const topStories = await topStoriesResponse.json();
    const storyIds = topStories.slice(0, 15); // Get first 15 stories

    // Fetch story details
    const storyPromises = storyIds.map(async (id: number) => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      if (!response.ok) return null;
      return response.json();
    });

    const stories = await Promise.all(storyPromises);
    const validStories = stories.filter((story: { url?: string; type: string; deleted?: boolean; dead?: boolean }) =>
      story && story.url && story.type === 'story' && !story.deleted && !story.dead
    );

    return validStories.slice(0, 8).map((story: { id: number; title: string; text?: string; time: number; by: string; url: string; score: number }, index: number) => ({
      id: `hn-${story.id}`,
      title: story.title,
      description: truncateText(story.text || story.title, 160),
      content: story.text || story.title,
      publishedAt: new Date(story.time * 1000).toISOString(),
      tags: ['hackernews', 'tech', 'programming'],
      category: 'Discussion',
      featured: index < 1 && story.score > 100, // Featured if high score
      readTime: calculateReadTime(story.text || story.title),
      author: story.by,
      url: story.url,
      source: 'hackernews' as const,
      slug: createSlug(story.title),
    }));
  } catch (error) {
    console.error('Error fetching Hacker News articles:', error);
    return [];
  }
}

// Medium RSS feed parsing (using RSS2JSON service)
async function fetchMediumArticles(): Promise<BlogPost[]> {
  try {
    // Using popular tech publications on Medium
    const feeds = [
      'https://medium.com/feed/@javascript',
      'https://medium.com/feed/@reactjs',
      'https://medium.com/feed/@vuejs'
    ];

    const allArticles: BlogPost[] = [];

    for (const feedUrl of feeds) {
      try {
        // Use RSS2JSON service to convert RSS to JSON
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&count=5`);
        if (!response.ok) continue;

        const data = await response.json();
        if (data.status !== 'ok' || !data.items) continue;

        const articles = data.items.map((item: { guid: string; title: string; description?: string; content?: string; pubDate: string; author: string; link: string; thumbnail?: string }) => ({
          id: `medium-${item.guid.split('/').pop() || Math.random().toString(36)}`,
          title: item.title,
          description: truncateText(item.description || item.title, 160),
          content: item.content || item.description,
          publishedAt: item.pubDate,
          tags: ['medium', 'javascript', 'programming'],
          category: 'Development',
          featured: false,
          readTime: calculateReadTime(item.content || item.description || ''),
          author: item.author || 'Medium Author',
          url: item.link,
          source: 'medium' as const,
          coverImage: item.thumbnail,
          slug: createSlug(item.title),
        }));

        allArticles.push(...articles);
      } catch (feedError) {
        console.error(`Error fetching Medium feed ${feedUrl}:`, feedError);
        continue;
      }
    }

    return allArticles.slice(0, 6); // Limit to 6 articles
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}

// Reddit API (r/programming, r/webdev)
async function fetchRedditArticles(): Promise<BlogPost[]> {
  try {
    const subreddits = ['programming', 'webdev', 'javascript'];
    const allArticles: BlogPost[] = [];

    for (const subreddit of subreddits) {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=5`);
      if (!response.ok) continue;

      const data = await response.json();
      const posts = data.data.children;

      const articles = posts
        .filter((post: { data: { is_self: boolean; url: string; stickied: boolean } }) => !post.data.is_self && post.data.url && !post.data.stickied)
        .map((post: { data: { id: string; title: string; selftext?: string; created_utc: number; author: string; url: string; permalink: string; thumbnail?: string } }) => ({
          id: `reddit-${post.data.id}`,
          title: post.data.title,
          description: truncateText(post.data.selftext || post.data.title, 160),
          content: post.data.selftext || post.data.title,
          publishedAt: new Date(post.data.created_utc * 1000).toISOString(),
          tags: [subreddit, 'reddit'],
          category: 'Discussion',
          featured: false,
          readTime: calculateReadTime(post.data.selftext || post.data.title),
          author: post.data.author,
          url: post.data.url.startsWith('http') ? post.data.url : `https://reddit.com${post.data.permalink}`,
          source: 'reddit' as const,
          coverImage: post.data.thumbnail !== 'self' ? post.data.thumbnail : undefined,
          slug: createSlug(post.data.title),
        }));

      allArticles.push(...articles);
    }

    return allArticles.slice(0, 8); // Limit to 8 articles
  } catch (error) {
    console.error('Error fetching Reddit articles:', error);
    return [];
  }
}

// Fallback articles for when APIs fail
function getFallbackArticles(): BlogPost[] {
  return [
    {
      id: 'fallback-1',
      title: 'Building Modern Web Applications with Vue.js',
      description: 'Learn how to create scalable and maintainable web applications using Vue.js and modern development practices.',
      content: 'Vue.js has become one of the most popular JavaScript frameworks for building user interfaces...',
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      tags: ['Vue.js', 'JavaScript', 'Web Development'],
      category: 'Development',
      featured: true,
      readTime: '8 min read',
      author: 'Tech Community',
      url: '#',
      source: 'fallback' as const,
      slug: 'building-modern-web-applications-vuejs',
    },
    {
      id: 'fallback-2',
      title: 'JavaScript ES6+ Features Every Developer Should Know',
      description: 'Explore the essential ES6+ features that will make you a more productive JavaScript developer.',
      content: 'Modern JavaScript has evolved significantly with ES6 and beyond...',
      publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      tags: ['JavaScript', 'ES6', 'Programming'],
      category: 'Development',
      featured: true,
      readTime: '6 min read',
      author: 'Tech Community',
      url: '#',
      source: 'fallback' as const,
      slug: 'javascript-es6-features-every-developer-should-know',
    },
    {
      id: 'fallback-3',
      title: 'Python for Web Development: A Complete Guide',
      description: 'Discover how Python can be used for web development with frameworks like Django and FastAPI.',
      content: 'Python has become increasingly popular for web development...',
      publishedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      tags: ['Python', 'Web Development', 'Backend'],
      category: 'Development',
      featured: false,
      readTime: '10 min read',
      author: 'Tech Community',
      url: '#',
      source: 'fallback' as const,
      slug: 'python-web-development-complete-guide',
    },
  ];
}

// Cache management
function getCachedArticles(): BlogPost[] | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const data: CacheData = JSON.parse(cached);
    const isExpired = Date.now() - data.timestamp > CACHE_DURATION;
    
    if (isExpired) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    
    return data.articles;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
}

function setCachedArticles(articles: BlogPost[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    const data: CacheData = {
      articles,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
}

// API Health Monitoring
interface APIHealth {
  source: string;
  isHealthy: boolean;
  lastChecked: number;
  errorCount: number;
}

const API_HEALTH_KEY = 'api_health_status';
const HEALTH_CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

function getAPIHealth(): Record<string, APIHealth> {
  if (typeof window === 'undefined') return {};

  try {
    const health = localStorage.getItem(API_HEALTH_KEY);
    return health ? JSON.parse(health) : {};
  } catch {
    return {};
  }
}

function updateAPIHealth(source: string, isHealthy: boolean): void {
  if (typeof window === 'undefined') return;

  try {
    const health = getAPIHealth();
    const now = Date.now();

    health[source] = {
      source,
      isHealthy,
      lastChecked: now,
      errorCount: isHealthy ? 0 : (health[source]?.errorCount || 0) + 1,
    };

    localStorage.setItem(API_HEALTH_KEY, JSON.stringify(health));
  } catch (error) {
    console.error('Error updating API health:', error);
  }
}

function shouldSkipAPI(source: string): boolean {
  const health = getAPIHealth();
  const apiHealth = health[source];

  if (!apiHealth) return false;

  const now = Date.now();
  const timeSinceLastCheck = now - apiHealth.lastChecked;

  // Skip if API has failed multiple times recently
  if (apiHealth.errorCount >= 3 && timeSinceLastCheck < HEALTH_CHECK_INTERVAL) {
    return true;
  }

  return false;
}

// Main API functions
export async function getAllArticles(): Promise<BlogPost[]> {
  // Check cache first
  const cached = getCachedArticles();
  if (cached && cached.length > 0) {
    return cached;
  }

  try {
    // Prepare API calls based on health status
    const apiCalls: Promise<BlogPost[]>[] = [];

    if (!shouldSkipAPI('dev.to')) {
      apiCalls.push(fetchDevToArticles().then(articles => {
        updateAPIHealth('dev.to', true);
        return articles;
      }).catch(error => {
        updateAPIHealth('dev.to', false);
        console.error('Dev.to API failed:', error);
        return [];
      }));
    }

    // Hashnode API temporarily disabled due to build issues

    if (!shouldSkipAPI('hackernews')) {
      apiCalls.push(fetchHackerNewsArticles().then(articles => {
        updateAPIHealth('hackernews', true);
        return articles;
      }).catch(error => {
        updateAPIHealth('hackernews', false);
        console.error('Hacker News API failed:', error);
        return [];
      }));
    }

    if (!shouldSkipAPI('medium')) {
      apiCalls.push(fetchMediumArticles().then(articles => {
        updateAPIHealth('medium', true);
        return articles;
      }).catch(error => {
        updateAPIHealth('medium', false);
        console.error('Medium API failed:', error);
        return [];
      }));
    }

    if (!shouldSkipAPI('reddit')) {
      apiCalls.push(fetchRedditArticles().then(articles => {
        updateAPIHealth('reddit', true);
        return articles;
      }).catch(error => {
        updateAPIHealth('reddit', false);
        console.error('Reddit API failed:', error);
        return [];
      }));
    }

    // Fetch from multiple sources with timeout
    const results = await Promise.allSettled(apiCalls);
    const allArticles: BlogPost[] = [];

    // Add successful results
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        allArticles.push(...result.value);
      }
    });

    // If no articles fetched, use fallback
    if (allArticles.length === 0) {
      const fallbackArticles = getFallbackArticles();
      setCachedArticles(fallbackArticles);
      return fallbackArticles;
    }

    // Sort by publication date (newest first) and prioritize featured articles
    allArticles.sort((a, b) => {
      // Featured articles first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // Then by publication date
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    // Limit total articles and cache
    const limitedArticles = allArticles.slice(0, 25);
    setCachedArticles(limitedArticles);

    return limitedArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    const fallbackArticles = getFallbackArticles();
    setCachedArticles(fallbackArticles);
    return fallbackArticles;
  }
}

export async function getArticleBySlug(slug: string): Promise<BlogPost | null> {
  const articles = await getAllArticles();
  return articles.find(article => article.slug === slug) || null;
}

export function getAllArticlesMeta(): Promise<BlogPostMeta[]> {
  return getAllArticles();
}

export function getRelatedArticles(currentSlug: string, tags: string[], limit = 3): Promise<BlogPostMeta[]> {
  return getAllArticles().then(articles => {
    const otherArticles = articles.filter(article => article.slug !== currentSlug);

    // Score articles based on shared tags
    const scoredArticles = otherArticles.map(article => {
      const sharedTags = article.tags.filter(tag => tags.includes(tag));
      return {
        ...article,
        score: sharedTags.length,
      };
    });

    // Sort by score (descending) and then by date (descending)
    scoredArticles.sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score;
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    return scoredArticles.slice(0, limit);
  });
}

// Export API health status for UI components
export function getAPIHealthStatus(): Record<string, APIHealth> {
  return getAPIHealth();
}

// Clear cache manually (useful for refresh functionality)
export function clearArticleCache(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(API_HEALTH_KEY);
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}
