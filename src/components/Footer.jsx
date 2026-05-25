import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Lima Rahimzai. All rights reserved.</p>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/lima-rahimzai-aa8690410"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/codestrom001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/Code_Strom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;