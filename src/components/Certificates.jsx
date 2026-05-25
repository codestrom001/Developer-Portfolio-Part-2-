import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";

function Certificates() {
  const certificates = [
    {
      img: cert1,
      title: "Responsive Web Designing"
    },
    {
      img: cert2,
      title: "JavaScript Algorithms & Data Structures"
    }
  ];

  return (
    <section className="certificates" id="certificates">
      <h2>My Certificates</h2>

      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.img} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;