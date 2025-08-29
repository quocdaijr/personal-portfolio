'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large React applications using TypeScript, proper component architecture, and state management patterns for maintainable code.',
    slug: 'building-scalable-react-applications',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Architecture'],
    category: 'Development',
    featured: true,
  },
  {
    id: 2,
    title: 'The Complete Guide to Next.js App Router',
    excerpt: 'Explore the new App Router in Next.js 13+ and learn how to build modern web applications with server components and streaming.',
    slug: 'nextjs-app-router-guide',
    publishedAt: '2024-01-08',
    readTime: '12 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    category: 'Development',
    featured: true,
  },
  {
    id: 3,
    title: 'Optimizing Web Performance with Modern Tools',
    excerpt: 'Discover the latest tools and techniques for optimizing web performance, from bundle analysis to runtime optimization.',
    slug: 'optimizing-web-performance',
    publishedAt: '2024-01-01',
    readTime: '10 min read',
    tags: ['Performance', 'Web Development', 'Optimization'],
    category: 'Performance',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding CSS Grid and Flexbox',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, when to use each, and practical examples for modern layouts.',
    slug: 'css-grid-vs-flexbox',
    publishedAt: '2023-12-20',
    readTime: '6 min read',
    tags: ['CSS', 'Layout', 'Frontend'],
    category: 'Design',
    featured: false,
  },
  {
    id: 5,
    title: 'API Design Best Practices',
    excerpt: 'Essential principles for designing RESTful APIs that are intuitive, scalable, and maintainable.',
    slug: 'api-design-best-practices',
    publishedAt: '2023-12-10',
    readTime: '9 min read',
    tags: ['API', 'Backend', 'Best Practices'],
    category: 'Development',
    featured: false,
  },
  {
    id: 6,
    title: 'Getting Started with Docker for Developers',
    excerpt: 'Learn the fundamentals of Docker and how to containerize your applications for consistent development environments.',
    slug: 'docker-for-developers',
    publishedAt: '2023-11-25',
    readTime: '11 min read',
    tags: ['Docker', 'DevOps', 'Containers'],
    category: 'DevOps',
    featured: false,
  },
];

const POSTS_PER_PAGE = 5;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div>
      {/* Featured Posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
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
                  <Tag className="h-3 w-3" />
                  {post.category}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
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

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group-hover:gap-2"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 transition-all duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">All Posts</h2>
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
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
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

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
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
