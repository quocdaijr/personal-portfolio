import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Quoc Dai
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer from Vietnam specializing in Vue.js, PHP, and Python.
          Building scalable web applications and contributing to open source projects.
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          With 7+ years in software development, I create robust applications using Vue.js, Nuxt.js, Laravel, and Python.
          I&apos;ve built everything from content management systems to Kubernetes learning environments,
          always focusing on clean code and modern development practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
        </div>

        {/* Stats or Quick Info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">7+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">15</div>
            <div className="text-sm text-muted-foreground">GitHub Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">8+</div>
            <div className="text-sm text-muted-foreground">Tech Stacks</div>
          </div>
        </div>
      </div>
    </section>
  );
}
