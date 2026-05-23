function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">⚡ Lima</div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#certificates">Certificates</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;