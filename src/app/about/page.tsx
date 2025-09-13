import { Metadata } from 'next';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, skills, and experience in software development.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer from Vietnam with 7+ years of experience building robust web applications and contributing to open source projects
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hello! I&apos;m Quoc Dai, a full-stack developer from Vietnam with over 7 years of experience
              in software development. My journey began in 2017 when I started exploring web technologies,
              and since then I&apos;ve been passionate about building robust, scalable applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in modern web development with deep expertise in Vue.js, Nuxt.js, PHP (Laravel, Yii2),
              and Python. My experience spans from building content management systems and audit tools
              to exploring containerization with Docker and orchestration with Kubernetes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Throughout my career, I&apos;ve contributed to open source projects, including developing
              a Yii2 audit package for tracking web/CLI requests and database changes. I believe in
              writing clean, maintainable code and following modern development practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m always excited to work on challenging projects and collaborate with fellow developers.
              Whether it&apos;s building a new application from scratch or contributing to existing projects,
              I bring dedication and technical expertise to every endeavor.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Personal Interests */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Open source development and contributions</li>
                <li>• Modern web frameworks and libraries</li>
                <li>• DevOps and containerization technologies</li>
                <li>• Database optimization and search engines</li>
                <li>• Building developer tools and utilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Currently Exploring</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced Kubernetes orchestration</li>
                <li>• Next.js and React ecosystem</li>
                <li>• Elasticsearch and search optimization</li>
                <li>• Message queue systems (RabbitMQ)</li>
                <li>• Modern deployment strategies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a conversation about technology and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
