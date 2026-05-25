import {
  FaCode,
  FaGamepad,
  FaPaintBrush,
  FaVideo
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p>
        I am a passionate frontend web developer who enjoys building
        clean, responsive, and user-friendly websites using React.
        I love learning modern web technologies and improving my
        design and development skills through real projects.
      </p>

      <div className="hobbies">
        <div className="hobby-card">
          <FaCode />
          <span>Coding</span>
        </div>

        <div className="hobby-card">
          <FaVideo />
          <span>Video Editing</span>
        </div>

        <div className="hobby-card">
          <FaGamepad />
          <span>Gaming</span>
        </div>

        <div className="hobby-card">
          <FaPaintBrush />
          <span>Drawing</span>
        </div>
      </div>
    </section>
  );
}

export default About;