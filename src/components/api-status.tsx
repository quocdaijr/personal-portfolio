'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Activity } from 'lucide-react';
import { getAPIHealthStatus } from '@/lib/blog-api';

interface APIHealth {
  source: string;
  isHealthy: boolean;
  lastChecked: number;
  errorCount: number;
}

export function APIStatus() {
  const [apiHealth, setApiHealth] = useState<Record<string, APIHealth>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateHealth = () => {
      const health = getAPIHealthStatus();
      setApiHealth(health);
    };

    updateHealth();
    const interval = setInterval(updateHealth, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const healthyAPIs = Object.values(apiHealth).filter(api => api.isHealthy).length;
  const totalAPIs = Object.keys(apiHealth).length;
  const hasUnhealthyAPIs = Object.values(apiHealth).some(api => !api.isHealthy);

  if (totalAPIs === 0) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`inline-flex items-center gap-2 px-3 py-2 text-xs rounded-md transition-colors ${
          hasUnhealthyAPIs 
            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200' 
            : 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200'
        }`}
        title="API Health Status"
      >
        <Activity className="h-3 w-3" />
        APIs: {healthyAPIs}/{totalAPIs}
      </button>

      {isVisible && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-card border rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Activity className="h-4 w-4" />
              API Health Status
            </h3>
            
            <div className="space-y-2">
              {Object.entries(apiHealth).map(([source, health]) => (
                <div key={source} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {health.isHealthy ? (
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    ) : health.errorCount >= 3 ? (
                      <XCircle className="h-3 w-3 text-red-500" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-yellow-500" />
                    )}
                    <span className="text-xs font-medium capitalize">{source}</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {health.isHealthy ? (
                      'Healthy'
                    ) : (
                      `${health.errorCount} errors`
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
