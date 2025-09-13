import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@qdjr.dev',
    href: 'mailto:contact@qdjr.dev',
    description: 'Best way to reach me',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vietnam',
    href: null,
    description: 'Available for remote work worldwide',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/quocdaijr',
    href: 'https://github.com/quocdaijr',
    description: 'Check out my code',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/quocdaijr',
    icon: Github,
    description: 'Open source projects and code',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/quocdaijr',
    icon: Linkedin,
    description: 'Professional network',
  },
  {
    name: 'Website',
    href: 'https://qdjr.dev',
    icon: Twitter,
    description: 'Original portfolio site',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const content = (
              <div className="flex items-start space-x-3 p-4 bg-card border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary mt-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {method.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {method.description}
                  </p>
                </div>
              </div>
            );

            return method.href ? (
              <a
                key={method.label}
                href={method.href}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={method.label}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Connect with me
        </h3>
        <div className="space-y-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-card border rounded-lg hover:bg-accent/50 transition-colors group"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {social.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {social.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Availability */}
      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          Availability
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Available for new projects
          </p>
          <p>
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Open to freelance opportunities
          </p>
          <p>
            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Interested in full-time roles
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
