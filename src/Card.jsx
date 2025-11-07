const Card = (props) => {
  return (
    <div className="project-card">
      <p>{props.title}</p>
      <img
        className="card-background"
        src={props.picture}
        style={{ blur: "(5px)" }}
      />
    </div>
  );
};
export default Card;
