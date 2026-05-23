function Profile({ image, title, bio }) {
  return (
    <section className="profile">
      <img src={image} alt="profile" />

      <div>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
}

export default Profile;