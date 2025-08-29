import { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a conversation about technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send me a message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Let&apos;s connect
            </h2>
            <ContactInfo />
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Prefer email?
          </h2>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out directly at{' '}
            <a
              href="mailto:your.email@example.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              your.email@example.com
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            I typically respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}
