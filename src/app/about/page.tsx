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
              Hello! I&apos;m Quoc Dai, a passionate full-stack developer from Vietnam with over 7 years of hands-on experience
              in software development. My journey began in 2017 when I first discovered the power of web technologies,
              and since then I&apos;ve been on an exciting path of continuous learning and building innovative solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in modern web development with deep expertise across the full technology stack. My primary focus
              areas include Vue.js and Nuxt.js for frontend development, PHP frameworks like Laravel and Yii2 for backend systems,
              and Python for automation and data processing. I&apos;ve built everything from personal portfolio sites to
              enterprise-level content management systems and developer tools.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              One of my proudest contributions to the open source community is the Yii2 Audit Package, which provides
              comprehensive tracking of web/CLI requests, database changes, and system errors. This project demonstrates
              my commitment to building tools that help other developers create more reliable and maintainable applications.
              I believe in the power of open source collaboration and actively contribute to projects that benefit the broader
              developer community.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Recently, I&apos;ve been expanding my expertise into DevOps and cloud technologies, exploring containerization
              with Docker and orchestration with Kubernetes. I&apos;m fascinated by the intersection of development and
              operations, and how modern deployment strategies can improve application reliability and scalability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What drives me most is the opportunity to solve complex problems through code and to work with teams that
              share a passion for creating exceptional digital experiences. Whether I&apos;m architecting a new system
              from the ground up, optimizing existing applications for better performance, or mentoring fellow developers,
              I approach every project with curiosity, dedication, and a commitment to excellence.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Development Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Development Philosophy
          </h2>
          <div className="bg-card border rounded-lg p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe that great software is built on three fundamental principles: <strong>clarity</strong>,
              <strong>reliability</strong>, and <strong>maintainability</strong>. Every line of code I write
              is guided by these principles, ensuring that solutions are not just functional, but also
              sustainable and scalable for long-term success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach emphasizes thorough testing, comprehensive documentation, and continuous learning.
              I&apos;m passionate about staying current with industry best practices while also contributing
              back to the community through open source projects and knowledge sharing. I believe that the
              best developers are those who never stop learning and growing.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <Education />

        {/* Personal Interests */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Core Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Open source development and community contributions</li>
                <li>• Modern web frameworks and progressive web applications</li>
                <li>• DevOps practices and containerization technologies</li>
                <li>• Database optimization and search engine technologies</li>
                <li>• Building developer tools that improve productivity</li>
                <li>• Software architecture and scalable system design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Currently Exploring</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced Kubernetes orchestration and service mesh</li>
                <li>• Next.js and React ecosystem for modern web apps</li>
                <li>• Elasticsearch for advanced search and analytics</li>
                <li>• Message queue systems and event-driven architecture</li>
                <li>• Cloud-native deployment strategies and CI/CD pipelines</li>
                <li>• AI/ML integration in web applications</li>
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
