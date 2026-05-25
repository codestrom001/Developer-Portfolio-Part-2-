import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaStar,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LEFT SIDE */}
      <div className="navbar-left">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="logo">Lima.dev</div>
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}><FaHome /> Home</a></li>
        <li><a href="#about" onClick={closeMenu}><FaUser /> About</a></li>
        <li><a href="#skills" onClick={closeMenu}><FaCode /> Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}><FaProjectDiagram /> Projects</a></li>
        <li><a href="#certificates" onClick={closeMenu}><FaCertificate /> Certificates</a></li>
        <li><a href="#contact" onClick={closeMenu}><FaEnvelope /> Contact</a></li>
        <li><a href="#feedback" onClick={closeMenu}><FaStar /> Feedback</a></li>
      </ul>

      {/* THEME */}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

    </nav>
  );
}

export default Navbar;