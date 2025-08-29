'use client';

import { Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
  variant?: 'default' | 'compact';
}

export function ShareButtons({ title, url, variant = 'default' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Share:</span>
        <div className="flex items-center gap-1">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            onClick={copyToClipboard}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy link"
          >
            <LinkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <Share2 className="h-4 w-4" />
        Share:
      </div>
      
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </a>
        
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          <LinkIcon className="h-4 w-4" />
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
