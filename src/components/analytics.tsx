'use client';

import { useEffect } from 'react';

// Web Vitals tracking
export function Analytics() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Track Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Add your analytics tracking here
        // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: window.location.pathname });
        console.log('Page view:', window.location.pathname);
      }
    };

    // Track initial page view
    trackPageView();

    // Track route changes
    const handleRouteChange = () => {
      trackPageView();
    };

    // Listen for route changes (Next.js specific)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        }
      });

      observer.observe({ entryTypes: ['longtask'] });

      return () => observer.disconnect();
    }
  }, []);
}

// Error boundary for production error tracking
export function trackError(error: Error, errorInfo?: Record<string, unknown>) {
  if (process.env.NODE_ENV === 'production') {
    // Add your error tracking service here
    // Example: Sentry.captureException(error, { extra: errorInfo });
    console.error('Production error:', error, errorInfo);
  }
}
