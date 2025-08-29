'use client';

import { useState } from 'react';

const categories = [
  'All',
  'Web Application',
  'Website',
  'Dashboard',
  'Tool',
  'Mobile App',
];

export function ProjectsFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
