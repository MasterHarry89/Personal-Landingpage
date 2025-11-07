import strava from "./assets/strava.png";
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
const Contact = () => {
  return (
    <div className="contact section">
      <h2>DO YOU HAVE A PROJECT TO DISCUSS?</h2>
      <div className="contact-content">
        <h3>GET IN TOUCH</h3>
        <div className="email-social-media">
          <div className="email">
            <p>EMAIL ADRESS</p>
            <p>nlas.tretecl@gmail.com</p>
          </div>
          <div className="social-media">
            <p>SOCIAL MEDIA</p>{" "}
            <div className="social-media-icons">
              <img className="social-icons" src={facebook} alt="facebook" />
              <img className="social-icons" src={linkedin} alt="linkedin" />
              <img className="social-icons" src={strava} alt="strava" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
