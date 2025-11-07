import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SecondPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  const age = query.get("age");
  const planet = query.get("planet");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=7")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="second-page">
      <p>druhá stránka</p>
      <p>jméno: {name}</p>
      <p>věk: {age}</p>
      <p>planeta: {planet}</p>
      <Link to="/">zpět na hlavní stránku</Link>
      <ul>
        {data &&
          data.map((character) => (
            <li key={character.id}>
              <img src={character.image} />
              {character.name}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default SecondPage;
