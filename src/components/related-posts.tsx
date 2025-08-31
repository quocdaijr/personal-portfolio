import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { BlogPostMeta } from '@/lib/blog-api';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Related Articles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3 w-3" />
                {formatDate(post.publishedAt)}
                <span>•</span>
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
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

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.description}
              </p>

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
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>

              {post.source === 'fallback' ? (
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group-hover:gap-2"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 transition-all duration-300" />
                </Link>
              ) : (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group-hover:gap-2"
                >
                  Read Article
                  <ExternalLink className="h-4 w-4 ml-1 transition-all duration-300" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
