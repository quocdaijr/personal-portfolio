import { Info } from 'lucide-react';

export function BlogNotice() {
  return (
    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm">
          <p className="text-blue-800 dark:text-blue-200 font-medium mb-1">
            Dynamic Content Notice
          </p>
          <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
            This blog features real-time articles from the tech community including Dev.to, Reddit, and other developer resources. 
            External articles will open in their original source for the best reading experience. 
            Content is cached for 30 minutes to optimize performance.
          </p>
        </div>
      </div>
    </div>
  );
}
