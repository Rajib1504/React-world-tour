import { useState } from "react";
import "./Country.css";
const Country = ({ country, handelMarkVisit }) => {
  //   console.log(country);
  const { name, flags, population, area, cca3 } = country;
  //   console.log(name);
  const [visited, setVisited] = useState(false);
  const handlelVisited = () => {
    setVisited(!visited);
  };
  //   console.log(handelMarkVisit);
  //   const getParams = () => handelMarkVisit(country);
  return (
    <div className={`box ${visited && "visited"}`}>
      <img src={flags.png} className="img" alt="" />
      <div>
        <h3>Name:{name.common}</h3>
        <p>Population:{population}</p>
        <p>area:{area}</p>
        <p>
          <small>Code:{cca3}</small>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button onClick={handlelVisited}>
            {visited ? "Visited" : "Going"}
          </button>
          <button onClick={() => handelMarkVisit(country)}>
            Mark as visited
          </button>
        </div>
        <p style={{ textAlign: "center" }}>
          {visited
            ? "I've visited this country"
            : "I want to visit this country"}
        </p>
      </div>
    </div>
  );
};

export default Country;
