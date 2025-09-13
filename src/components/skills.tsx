const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Vue.js', level: 92 },
      { name: 'Nuxt.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 78 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'React', level: 75 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'PHP', level: 88 },
      { name: 'Laravel', level: 85 },
      { name: 'Yii2', level: 82 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Node.js', level: 72 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Linux', level: 82 },
      { name: 'Elasticsearch', level: 75 },
      { name: 'RabbitMQ', level: 68 },
    ],
  },
];

export function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
        Skills & Technologies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {category.title}
            </h3>
            
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
