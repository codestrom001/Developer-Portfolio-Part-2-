function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        I’m a frontend developer focused on building
        modern, responsive, and interactive web
        applications using React and JavaScript.
      </p>

      <h3 className="skills-title">Skills</h3>

      <div className="skills-container">

        <div className="skill-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <p>React</p>
        </div>

      </div>
    </section>
  );
}

export default About;