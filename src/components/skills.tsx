const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'React', level: 70 },
      { name: 'Nuxt.js', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Database Design', level: 75 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Netlify', level: 80 },
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
