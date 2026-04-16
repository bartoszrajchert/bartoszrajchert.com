const projects = [
  {
    title: 'OpenBase',
    description:
      'Is a desktop database workspace. It supports popular SQL dialects for schema browsing, query execution, relationship visualization, and more.',
    link: 'https://github.com/bartoszrajchert/openbase',
  },
  {
    title: 'Tokun',
    description:
      'The simple, and easy-to-use tool for working with design tokens with powerups. It can support you building themes and using it in multiple platforms.',
    link: 'https://tokun.bartoszrajchert.com/',
  },
];

export function ProjectsSection() {
  return (
    <section>
      <h1 className="stagger-item text-primary mb-5 font-[500]">Projects</h1>
      <div className="space-y-1">
        {projects.map(({ title, description, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-item hover:bg-primary/5 -mx-4 block space-y-1 rounded-xl px-4 py-3 transition-colors"
          >
            <h2>{title}</h2>
            <p className="text-primary/80 text-[15px] tracking-[0.2px]">
              {description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
