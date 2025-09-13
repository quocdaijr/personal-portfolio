const experiences = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: 'Freelance & Open Source',
    location: 'Vietnam (Remote)',
    period: '2023 - Present',
    description: [
      'Developed modern web applications using Vue.js, Nuxt.js, and Next.js frameworks',
      'Built and maintained content management systems with PHP (Laravel, Yii2)',
      'Created developer tools including Yii2 audit package for tracking system changes',
      'Explored containerization and orchestration with Docker and Kubernetes',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Next.js', 'PHP', 'Laravel', 'Docker'],
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'Personal Projects & Portfolio',
    location: 'Vietnam (Remote)',
    period: '2021 - 2023',
    description: [
      'Built and deployed personal portfolio website (qdjr.dev) using Nuxt.js',
      'Developed various web applications with focus on performance and user experience',
      'Implemented search functionality using Elasticsearch integration',
      'Created message queue systems using Python and RabbitMQ (Pika)',
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'Elasticsearch', 'Python', 'RabbitMQ'],
  },
  {
    id: 3,
    title: 'Software Development Learning',
    company: 'Self-Directed Study',
    location: 'Vietnam',
    period: '2017 - 2021',
    description: [
      'Started programming journey with focus on web development fundamentals',
      'Mastered JavaScript, PHP, and Python programming languages',
      'Built foundational knowledge in software engineering principles',
      'Contributed to open source projects and developer community',
    ],
    technologies: ['JavaScript', 'PHP', 'Python', 'HTML5', 'CSS3', 'Git'],
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
