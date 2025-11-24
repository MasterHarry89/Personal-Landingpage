const Navigation = (props) => {
  return (
    <>
      <div className="navigation">
        <div className="name">
          <p>NICOLAS FENCL</p>
        </div>
        <div className="nav-buttons">
          <ul className="nav-links">
            <li>
              <a
                className="nav-button hide-on-mobile"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                className="nav-button hide-on-mobile"
                onClick={() => {
                  document.getElementById("technologies")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                TECHNOLOGIES
              </a>
            </li>
            <li>
              <a
                className="nav-button hide-on-mobile"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                PROJECTS
              </a>
            </li>
            <li>
              {" "}
              <a
                className="nav-button hide-on-mobile"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                className="nav-button hamburger-menu-btn"
                onClick={() => props.onToggleMenu(true)}
              >
                ☰
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`nav-side-bar ${props.isMenuOpen ? "open" : "closed"}`}>
        <ul className="nav-bar-links">
          <div className="close-btn">
            <a
              className="nav-li hamburger-menu "
              onClick={() => props.onToggleMenu(false)}
            >
              X
            </a>
          </div>

          <img src={props.profile} className="nav-profile-picture" />

          <li>
            <a
              className="nav-li"
              onClick={() => {
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
                props.onToggleMenu(false);
              }}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              className="nav-li"
              onClick={() => {
                document
                  .getElementById("technologies")
                  .scrollIntoView({ behavior: "smooth" });
                props.onToggleMenu(false);
              }}
            >
              TECHNOLOGIES
            </a>
          </li>
          <li>
            <a
              className="nav-li"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
                props.onToggleMenu(false);
              }}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="nav-li"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                props.onToggleMenu(false);
              }}
            >
              CONTACT
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
