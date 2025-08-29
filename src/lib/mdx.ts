import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  readTime: string;
  author: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  readTime: string;
  author: string;
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

// Get blog post metadata
export function getPostMeta(slug: string): BlogPostMeta | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      publishedAt: data.publishedAt || '',
      updatedAt: data.updatedAt,
      tags: data.tags || [],
      category: data.category || 'Uncategorized',
      featured: data.featured || false,
      readTime: data.readTime || '5 min read',
      author: data.author || 'Anonymous',
    };
  } catch (error) {
    console.error(`Error reading post metadata for ${slug}:`, error);
    return null;
  }
}

// Get all blog posts metadata
export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  return posts;
}

// Get blog post content
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      publishedAt: data.publishedAt || '',
      updatedAt: data.updatedAt,
      tags: data.tags || [],
      category: data.category || 'Uncategorized',
      featured: data.featured || false,
      readTime: data.readTime || '5 min read',
      author: data.author || 'Anonymous',
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Compile MDX content
export async function compileMDXContent(content: string) {
  try {
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
      },
    });
    
    return compiledContent;
  } catch (error) {
    console.error('Error compiling MDX:', error);
    throw error;
  }
}

// Get related posts
export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPostMeta[] {
  const allPosts = getAllPostsMeta();
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // Score posts based on shared tags
  const scoredPosts = otherPosts.map(post => {
    const sharedTags = post.tags.filter(tag => tags.includes(tag));
    return {
      ...post,
      score: sharedTags.length,
    };
  });
  
  // Sort by score (descending) and then by date (descending)
  scoredPosts.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
  
  return scoredPosts.slice(0, limit);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPostsMeta();
  return allPosts.filter(post => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPostsMeta();
  return allPosts.filter(post => post.tags.includes(tag));
}

// Search posts
export function searchPosts(query: string): BlogPostMeta[] {
  const allPosts = getAllPostsMeta();
  const lowercaseQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Get all categories
export function getAllCategories(): { name: string; count: number }[] {
  const allPosts = getAllPostsMeta();
  const categoryCount: Record<string, number> = {};
  
  allPosts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });
  
  return Object.entries(categoryCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Get all tags
export function getAllTags(): { name: string; count: number }[] {
  const allPosts = getAllPostsMeta();
  const tagCount: Record<string, number> = {};
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
