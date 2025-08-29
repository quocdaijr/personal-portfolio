import { Hero } from '@/components/hero';
import { FeaturedProjects } from '@/components/featured-projects';
import { RecentPosts } from '@/components/recent-posts';

export default function HomePage() {
  return (
    <div className="space-y-16 py-8">
      <Hero />
      <FeaturedProjects />
      <RecentPosts />
    </div>
  );
}
