'use client';

import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, order processing, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    category: 'Web Application',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and project tracking.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    category: 'Web Application',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
    featured: true,
    date: '2023-12-10',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using multiple weather APIs with beautiful data visualizations and location search.',
    image: '/images/projects/weather.jpg',
    technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS Grid', 'Axios'],
    category: 'Dashboard',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather',
    featured: true,
    date: '2023-11-20',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, MDX blog, and optimized performance.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MDX', 'TypeScript'],
    category: 'Website',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: false,
    date: '2023-10-05',
  },
  {
    id: 5,
    title: 'API Documentation Tool',
    description: 'A tool for generating beautiful API documentation from OpenAPI specifications with interactive examples and code snippets.',
    image: '/images/projects/api-docs.jpg',
    technologies: ['React', 'TypeScript', 'OpenAPI', 'Prism.js', 'Styled Components'],
    category: 'Tool',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/api-docs',
    featured: false,
    date: '2023-09-15',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with rooms, private messaging, file sharing, and emoji reactions built with Socket.io.',
    image: '/images/projects/chat.jpg',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    category: 'Web Application',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/chat',
    featured: false,
    date: '2023-08-20',
  },
];

interface ProjectsGridProps {
  selectedCategory?: string;
}

export function ProjectsGrid({ selectedCategory = 'All' }: ProjectsGridProps) {
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          {/* Project Image */}
          <div className="aspect-video bg-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-muted-foreground text-sm">Project Image</div>
            </div>
            {project.featured && (
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Project Meta */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Calendar className="h-3 w-3" />
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
              <span>•</span>
              <span>{project.category}</span>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Project Links */}
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
