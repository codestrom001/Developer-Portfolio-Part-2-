import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";

function Certificates() {
  return (
    <section
      className="certificates"
      id="certificates"
    >
      <h2 className="section-title">
        Certificates
      </h2>

      <div className="cert-container">

        <div className="cert-card">
          <img src={cert1} alt="Certificate 1" />
          <h3>Certificate 1</h3>
          <p>My first certification</p>
        </div>

        <div className="cert-card">
          <img src={cert2} alt="Certificate 2" />
          <h3>Certificate 2</h3>
          <p>My second certification</p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;