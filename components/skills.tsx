export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: 'React, Next.js, TypeScript, Tailwind CSS, Shadcn/ui',
    },
    {
      category: 'Backend',
      skills: 'Node.js, Express, Python, PostgreSQL, Supabase, MongoDB',
    },
    {
      category: 'Tools',
      skills: 'Git, Docker, Vercel, GitHub, VS Code',
    },
    {
      category: 'Practices',
      skills: 'RESTful APIs, Authentication, Database Design, Performance',
    },
  ]

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Skills
        </h2>

        <div className="space-y-8">
          {skillCategories.map((item) => (
            <div key={item.category} className="flex flex-col sm:flex-row gap-4">
              {/* Category label */}
              <div className="min-w-[120px]">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  {item.category}
                </p>
              </div>

              {/* Skills list */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
