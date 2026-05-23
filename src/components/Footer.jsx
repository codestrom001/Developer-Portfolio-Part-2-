function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Lima Rahimzai</p>

      <div style={styles.links}>
        <a
          href="https://github.com/codestrom001"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/lima-rahimzai-aa8690410"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>

        <a
          href="https://x.com/Code_Strom"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          X (Twitter)
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    background: "black",
    color: "white",
    textAlign: "center",
  },

  links: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Footer;