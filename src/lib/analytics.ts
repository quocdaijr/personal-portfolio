// Simple Analytics integration for privacy-focused analytics
declare global {
  interface Window {
    sa_event?: (event: string, metadata?: Record<string, unknown>) => void;
  }
}

export const analytics = {
  // Track page views
  page: (url: string) => {
    if (typeof window !== 'undefined' && window.sa_event) {
      window.sa_event('pageview', { page: url });
    }
  },

  // Track custom events
  track: (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.sa_event) {
      window.sa_event(event, properties);
    }
  },

  // Track blog post reads
  blogPost: (slug: string, title: string) => {
    analytics.track('blog_post_view', {
      slug,
      title,
    });
  },

  // Track project views
  project: (id: string, title: string) => {
    analytics.track('project_view', {
      project_id: id,
      title,
    });
  },

  // Track contact form submissions
  contact: (type: 'form' | 'email' | 'social') => {
    analytics.track('contact_attempt', {
      type,
    });
  },

  // Track theme changes
  themeChange: (theme: 'light' | 'dark') => {
    analytics.track('theme_change', {
      theme,
    });
  },

  // Track search queries
  search: (query: string, results: number) => {
    analytics.track('search', {
      query,
      results_count: results,
    });
  },
};

// Performance monitoring utilities
export const performance = {
  // Measure and track Core Web Vitals
  measureWebVitals: () => {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      analytics.track('web_vital_lcp', {
        value: lastEntry.startTime,
      });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
        analytics.track('web_vital_fid', {
          value: (entry.processingStart || 0) - entry.startTime,
        });
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry & { value?: number; hadRecentInput?: boolean }) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0;
        }
      });
      analytics.track('web_vital_cls', {
        value: clsValue,
      });
    }).observe({ entryTypes: ['layout-shift'] });
  },

  // Track page load times
  trackPageLoad: (pageName: string) => {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const loadTime = window.performance.now();
      analytics.track('page_load_time', {
        page: pageName,
        load_time: loadTime,
      });
    });
  },
};
