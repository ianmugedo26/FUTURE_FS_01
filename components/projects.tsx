export function Projects() {
  const projects = [
    {
      title: 'Google calender clone',
      date: 'Aug 2025',
      description:
            'Developed a functional calendar app with event creation, editing and scheduling logic.',
      tags: [ 'React', 'MySQL', 'Tailwind CSS', 'PHP'],
    },
    {
      title: 'Student management system',
      date: 'Aug 2025',
      description:
            'Built a console based OOP system for managing student records, implementing the CRUD operations, menu-driven and modular class structure',
      tags: ['C++'],
    },
    {
      title: 'Task Management App',
      date: 'Mar 2025',
      description:
        'Collaborative task management tool with real-time updates, team workspaces, and notification system. Focuses on intuitive UX and performance optimization.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Shadcn/ui'],
    },
    {
      title: '3d personal portfolio',
      date: 'Aug 2025',
      description:
            'Implemented 3D assets, animations and smooth UI/UX features.',
      tags: ['React.js', 'Javascript', 'Three.js'],
    },
  ]

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-border pb-10 last:border-b-0">
              {/* Project header with title and date */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {project.date}
                </p>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
