import { Metadata } from 'next';
import { ProjectsGrid } from '@/components/projects-grid';
import { ProjectsFilter } from '@/components/projects-filter';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my professional and personal projects, featuring web applications, tools, and experiments.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, from professional applications to personal experiments
          </p>
        </div>

        {/* Projects Filter */}
        <ProjectsFilter />

        {/* Projects Grid */}
        <ProjectsGrid />
      </div>
    </div>
  );
}
