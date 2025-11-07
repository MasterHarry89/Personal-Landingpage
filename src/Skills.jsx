import javascript from "./assets/js2.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import react from "./assets/react.png";
const Skills = () => {
  return (
    <>
      <div className="neon-fog-circle"></div>
      <div className="skills section">
        <h2>SKILLS</h2>
        <p>The skills, tools and technologies I use for web building:</p>
        <div className="logos">
          <img className="logo" src={html} alt="HTML" />
          <img className="logo" src={css} alt="css" />
          <img className="logo js" src={javascript} alt="javaScript" />
          <img className="logo" src={react} alt="React JS" />
        </div>
      </div>
    </>
  );
};
export default Skills;
