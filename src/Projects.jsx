import Card from "./Card";
import LandingPagePicture from "./assets/personal landing page.png";
import tensionApp from "./assets/tension app.png";
import mysys from "./assets/mysis.png";
const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2>PROJECTS</h2>
      <div className="cards">
        <Card title={"Service Management System"} picture={mysys} />
        <Card title={"Personal Landing Page"} picture={LandingPagePicture} />
        <Card title={"Spoke Tension App"} picture={tensionApp} />
        <Card title={"Sport League"} />
      </div>
    </section>
  );
};
export default Projects;
