const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Freelance & Personal Projects',
    location: 'Remote',
    period: '2022 - Present',
    description: [
      'Developed full-stack web applications using Vue.js, JavaScript, and Python',
      'Built responsive and user-friendly interfaces with modern CSS frameworks',
      'Implemented RESTful APIs and database integration for various projects',
      'Collaborated on open-source projects and contributed to the developer community',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Python', 'Nuxt.js', 'CSS3'],
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'Personal Portfolio Development',
    location: 'Remote',
    period: '2021 - 2022',
    description: [
      'Created and maintained personal portfolio website using Nuxt.js',
      'Implemented modern web development practices and performance optimization',
      'Designed responsive layouts and ensured cross-browser compatibility',
      'Integrated various APIs and third-party services for enhanced functionality',
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 3,
    title: 'Learning & Development',
    company: 'Self-Directed Study',
    location: 'Remote',
    period: '2020 - 2021',
    description: [
      'Focused on learning modern web development technologies and frameworks',
      'Built various practice projects to strengthen programming fundamentals',
      'Studied software engineering principles and best practices',
      'Participated in online coding communities and developer forums',
    ],
    technologies: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'Git'],
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
