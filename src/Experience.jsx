import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Experience = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [planet, setPlanet] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    const params = new URLSearchParams({ name, age, planet });
    navigate(`./SecondPage?${params.toString()}`);
  };
  return (
    <div className="hero section">
      <p>Tady fotka a popisek</p>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="planet"
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      />
      <button onClick={handleSubmit}>to the second page</button>
    </div>
  );
};
export default Experience;
