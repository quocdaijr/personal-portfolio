'use client';

import { useState } from 'react';

const categories = [
  { name: 'All', count: 15 },
  { name: 'Development', count: 8 },
  { name: 'Design', count: 3 },
  { name: 'Performance', count: 2 },
  { name: 'DevOps', count: 2 },
];

export function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-3">
        Categories
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
              selectedCategory === category.name
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
          >
            <span>{category.name}</span>
            <span className="text-xs">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
