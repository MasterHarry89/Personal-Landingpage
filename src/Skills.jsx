import javascript from "./assets/js2.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import react from "./assets/react.png";
import mysql from "./assets/mysql.png";
import express from "./assets/express.png";
import figma from "./assets/figma.png";
import tailwind from "./assets/tailwind.svg";
const Skills = () => {
  return (
    <>
      <div className="neon-fog-circle"></div>
      <section className="skills section" id="technologies">
        <h2>SKILLS</h2>
        <p>The skills, tools and technologies I use for web building:</p>
        <div className="logos">
          <img className="logo" src={html} alt="HTML" />
          <img className="logo" src={css} alt="css" />
          <img className="logo js" src={javascript} alt="javaScript" />
          <img className="logo" src={react} alt="React JS" />
          <img
            className="express"
            src={express}
            alt="Express JS"
            style={{ filter: "invert(100%)" }}
          />
          <img className="logo" src={mysql} alt="MySQL" />
          <img className="logo" src={figma} alt="Figma" />
          <img className="logo" src={tailwind} alt="Tailwind CSS" />
        </div>
      </section>
    </>
  );
};
export default Skills;
