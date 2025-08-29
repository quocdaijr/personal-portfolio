'use client';

import { ReactNode } from 'react';

interface BlogPostContentProps {
  content: ReactNode;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {content}
    </div>
  );
}
