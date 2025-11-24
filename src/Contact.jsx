import strava from "./assets/strava.png";
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
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
              <Link to="https://www.facebook.com/nicolas.fencl/">
                <img className="social-icons" src={facebook} alt="facebook" />
              </Link>
              <Link to="www.linkedin.com/in/nicolas-fencl-9244aa189">
                <img className="social-icons" src={linkedin} alt="linkedin" />
              </Link>
              <Link to="https://www.strava.com/athletes/8858275">
                <img className="social-icons" src={strava} alt="strava" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
