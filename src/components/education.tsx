const education = [
  {
    id: 1,
    degree: 'Self-Taught Software Engineer',
    school: 'Online Learning & Practice',
    location: 'Remote',
    period: '2020 - Present',
    gpa: null,
    description: 'Self-directed learning focused on modern web development technologies, software engineering principles, and practical application through personal projects.',
    coursework: [
      'JavaScript & ES6+',
      'Vue.js & Nuxt.js',
      'Python Programming',
      'Web Development',
      'Database Design',
      'API Development',
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: 'JavaScript Fundamentals',
    issuer: 'freeCodeCamp',
    date: '2021',
    credentialId: 'JS-FUND-2021',
  },
  {
    id: 2,
    name: 'Vue.js Complete Course',
    issuer: 'Online Learning Platform',
    date: '2022',
    credentialId: 'VUE-COMP-2022',
  },
  {
    id: 3,
    name: 'Python Programming',
    issuer: 'Codecademy',
    date: '2021',
    credentialId: 'PY-PROG-2021',
  },
];

export function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
        Education & Certifications
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-card border rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground mt-1">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <p className="text-sm text-muted-foreground mt-1">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">
                    Relevant Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-card border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">{cert.name}</h4>
                <p className="text-primary text-sm">{cert.issuer}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-muted-foreground">
                    Issued: {cert.date}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
