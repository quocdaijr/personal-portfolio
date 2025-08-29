import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const recentPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large React applications using TypeScript, proper component architecture, and state management patterns.',
    slug: 'building-scalable-react-applications',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Architecture'],
  },
  {
    id: 2,
    title: 'The Complete Guide to Next.js App Router',
    excerpt: 'Explore the new App Router in Next.js 13+ and learn how to build modern web applications with server components and streaming.',
    slug: 'nextjs-app-router-guide',
    publishedAt: '2024-01-08',
    readTime: '12 min read',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    id: 3,
    title: 'Optimizing Web Performance with Modern Tools',
    excerpt: 'Discover the latest tools and techniques for optimizing web performance, from bundle analysis to runtime optimization.',
    slug: 'optimizing-web-performance',
    publishedAt: '2024-01-01',
    readTime: '10 min read',
    tags: ['Performance', 'Web Development', 'Optimization'],
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function RecentPosts() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on software development, technology trends, and lessons learned from building products.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Post Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Read More Link */}
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

        {/* View All Posts Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
