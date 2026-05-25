import { FaExternalLinkAlt } from "react-icons/fa";

import schoolhub from "../assets/schoolhub.png";
import novainvoice from "../assets/novainvoice.png";
import infinity from "../assets/infinity-cinema.png";

function Projects() {
  const projects = [
    {
      img: schoolhub,
      title: "SchoolHub",
      desc: "A digital school platform for managing students, attendance, and assignments in one place.",
      badge: "Full Stack Idea",
      demo: "https://codestrom001.github.io/school-portal/"
    },
    {
      img: novainvoice,
      title: "NovaInvoice",
      desc: "A smart invoice generator for freelancers with clean UI and fast billing system.",
      badge: "Web App",
      demo: "https://codestrom001.github.io/freelance-invoice-app_/"
    },
    {
      img: infinity,
      title: "Infinity Cinema",
      desc: "A movie browsing platform with modern UI for exploring films and trailers.",
      badge: "Frontend App",
      demo: "https://codestrom001.github.io/movie-theater-page/"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <span className="badge">{project.badge}</span>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;