function Header({ message, image }) {
  return (
    <header className="hero" id="home">
      <div className="hero-text">
        <h1>Hi, I’m Lima Rahimzai 👋</h1>

        <p>{message}</p>

        <p className="role">
          Frontend Developer | React Learner
        </p>
      </div>

      <div className="hero-img">
        <img src={image} alt="profile" />
      </div>
    </header>
  );
}

export default Header;