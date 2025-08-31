import { Metadata } from 'next';
import { BlogList } from '@/components/blog-list';
import { BlogSearch } from '@/components/blog-search';
import { BlogCategories } from '@/components/blog-categories';
import { BlogNotice } from '@/components/blog-notice';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on software development, technology trends, and lessons learned from building products.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest articles from the tech community - featuring content from Dev.to, Reddit, and other developer resources
          </p>
        </div>

        {/* Notice */}
        <BlogNotice />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogList />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Search */}
              <BlogSearch />
              
              {/* Categories */}
              <BlogCategories />
              
              {/* Newsletter Signup */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified about the latest tech articles and development trends.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  />
                  <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
