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
            Passionate software engineer with a love for creating exceptional digital experiences
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hello! I&apos;m a software engineer based in [Your Location], passionate about building
              digital products that make a difference. My journey in technology started [X years ago]
              when I wrote my first line of code, and I&apos;ve been hooked ever since.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in full-stack web development with a focus on React, Next.js, and TypeScript.
              I love the entire process of building software – from initial concept and design to
              deployment and maintenance. There&apos;s something magical about turning ideas into reality
              through code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When I&apos;m not coding, you can find me [your hobbies/interests]. I believe that diverse
              experiences outside of technology make me a better developer and problem solver.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m always excited to work on new projects and collaborate with other passionate
              individuals. If you have an interesting project or just want to chat about technology,
              feel free to reach out!
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
                <li>• Open source contributions</li>
                <li>• Technical writing and blogging</li>
                <li>• Photography and design</li>
                <li>• Hiking and outdoor activities</li>
                <li>• Reading sci-fi and technology books</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Currently Learning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Machine Learning and AI</li>
                <li>• Rust programming language</li>
                <li>• Cloud architecture patterns</li>
                <li>• Mobile development with React Native</li>
                <li>• DevOps and infrastructure</li>
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
