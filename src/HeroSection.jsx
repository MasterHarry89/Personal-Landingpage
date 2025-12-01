const HeroSection = (props) => {
  return (
    <>
      <div className="hero section">
        <div className="left-side">
          <h1>
            FRONTEND
            <br />
            DEVELOPER
            <br />
            JUNIOR
          </h1>
          <p>
            I am Nicolas -{" "}
            <span className="highlight">web-developer junior</span> who found a
            passion in creating functional and responsive web apps. Do you want
            me to be a part of your team?
          </p>
          <div className="buttons">
            <button className="neon-btn">Get my CV</button>
            <button
              className="neon-btn2"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Let´s talk
            </button>
          </div>
        </div>
        <div className="right-side">
          <img
            className="profile-picture"
            src={props.profile}
            alt="Nicolas Fencl"
          />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
