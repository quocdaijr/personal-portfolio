'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, RefreshCw, ExternalLink } from 'lucide-react';
import { APIStatus } from '@/components/api-status';
import { getAllArticles, clearArticleCache, type BlogPost } from '@/lib/blog-api';

interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getSourceStyle(source: string) {
  const styles = {
    'dev.to': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'hashnode': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'hackernews': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    'medium': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'reddit': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'fallback': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
  };
  return styles[source as keyof typeof styles] || styles.fallback;
}
const POSTS_PER_PAGE = 8;

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<LoadingState>({ isLoading: true, error: null });

  const fetchArticles = async (forceClear = false) => {
    setLoading({ isLoading: true, error: null });
    try {
      if (forceClear) {
        clearArticleCache();
      }
      const fetchedArticles = await getAllArticles();
      setArticles(fetchedArticles);
      setLoading({ isLoading: false, error: null });
    } catch {
      setLoading({
        isLoading: false,
        error: 'Failed to load articles. Please try again later.'
      });
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = articles.slice(startIndex, endIndex);
  const featuredPosts = articles.filter(post => post.featured).slice(0, 2);

  // Loading state
  if (loading.isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Loading Articles...</h2>
          <RefreshCw className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-card border rounded-lg p-6 animate-pulse">
              <div className="h-4 bg-muted rounded mb-4"></div>
              <div className="h-6 bg-muted rounded mb-3"></div>
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (loading.error) {
    return (
      <div className="text-center py-12">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-destructive mb-2">Unable to Load Articles</h2>
          <p className="text-muted-foreground mb-4">{loading.error}</p>
          <button
            onClick={() => fetchArticles()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header with refresh button */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Fresh content from Dev.to, Hashnode, Hacker News, Medium, Reddit, and other tech communities
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <APIStatus />
          <button
            onClick={() => fetchArticles(false)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            title="Refresh articles from cache"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button
            onClick={() => fetchArticles(true)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
            title="Force refresh from all APIs"
          >
            <RefreshCw className="h-4 w-4" />
            Force Refresh
          </button>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.publishedAt)}
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getSourceStyle(post.source)}`}>
                      {post.source}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.source === 'fallback' ? (
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    ) : (
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    )}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      by {post.author}
                    </span>
                    {post.source === 'fallback' ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    ) : (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground mb-6">All Articles</h3>
        <div className="space-y-6">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.publishedAt)}
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getSourceStyle(post.source)}`}>
                      {post.source}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.source === 'fallback' ? (
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    ) : (
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    )}
                  </h3>

                  <p className="text-muted-foreground mb-3 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      by {post.author}
                    </span>
                    {post.source === 'fallback' ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    ) : (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 text-sm rounded-md ${
                currentPage === page
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
