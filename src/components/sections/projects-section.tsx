import { projects } from "@/lib/content/projects";

export const ProjectsSection = () => {
  return (
    <section className="my-6 space-y-10 leading-snug">
      {projects.map((project) => (
        <article key={project.id} className="flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <a
              target="_blank"
              href={project.href}
              className="font-medium"
              rel="noopener noreferrer"
            >
              # {project.name}
            </a>
            <span>{project.dates}</span>
          </div>
          <p>{project.description}</p>
        </article>
      ))}
    </section>
  );
};
