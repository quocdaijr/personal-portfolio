const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Company Inc.',
    location: 'Remote',
    period: '2022 - Present',
    description: [
      'Led development of customer-facing web applications using React and Next.js',
      'Improved application performance by 40% through code optimization and lazy loading',
      'Mentored junior developers and established coding standards for the team',
      'Collaborated with design and product teams to implement user-centered solutions',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client websites and web applications',
      'Built RESTful APIs using Node.js and Express.js with PostgreSQL databases',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Worked directly with clients to gather requirements and provide technical solutions',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Startup Co.',
    location: 'San Francisco, CA',
    period: '2019 - 2020',
    description: [
      'Built user interfaces for a SaaS platform using React and Redux',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Optimized application bundle size and loading performance',
      'Participated in code reviews and agile development processes',
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'SCSS', 'Webpack'],
  },
];

export function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
        Work Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
            )}
            
            <div className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-full" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {experience.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
