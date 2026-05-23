function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="badges">
        {project.techStack.map((tech, i) => (
          <span key={i} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <a href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;