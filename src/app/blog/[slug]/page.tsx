import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { getArticleBySlug, getAllArticles, getRelatedArticles } from '@/lib/blog-api';
import { RelatedPosts } from '@/components/related-posts';
import { ShareButtons } from '@/components/share-buttons';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const articles = await getAllArticles();
    return articles.map((article) => ({ slug: article.slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // If this is an external article, redirect to the original source
  if (article.source !== 'fallback') {
    redirect(article.url);
  }

  const relatedArticles = await getRelatedArticles(slug, article.tags);

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            {formatDate(article.publishedAt)}
            {article.updatedAt && (
              <>
                <span>•</span>
                <span>Updated {formatDate(article.updatedAt)}</span>
              </>
            )}
            <span>•</span>
            <Clock className="h-4 w-4" />
            {article.readTime}
            <span>•</span>
            <Tag className="h-4 w-4" />
            {article.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {article.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author and Share */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">
                  {article.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{article.author}</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>

            <ShareButtons
              title={article.title}
              url={`/blog/${article.slug}`}
            />
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-muted-foreground leading-relaxed">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
            ) : (
              <p>This is a fallback article. The full content would be available on the original platform.</p>
            )}
          </div>
        </div>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Published on {formatDate(article.publishedAt)}
                {article.updatedAt && ` • Updated on ${formatDate(article.updatedAt)}`}
              </p>
            </div>

            <ShareButtons
              title={article.title}
              url={`/blog/${article.slug}`}
              variant="compact"
            />
          </div>
        </footer>

        {/* Related Posts */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <RelatedPosts posts={relatedArticles} />
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get notified when I publish new articles about 
            web development, technology, and programming.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-sm border border-input bg-background rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            />
            <button className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </article>
  );
}
