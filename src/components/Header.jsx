import profile from "../assets/profile.png";

function Header({ name, role, description }) {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hero-tag">Frontend Developer</p>

        <h1>{name}</h1>

        <h2>{role}</h2>

        <p className="hero-desc">{description}</p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Header;