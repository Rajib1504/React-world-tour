import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [marked, setMarked] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelMarkVisit = (country) => {
    console.log("I've visited the state");
    setMarked(country);
    //     console.log(country);
  };
  return (
    <div>
      <h3>Countries:{countries.length}</h3>

      <div className="grid, area">
        <h5 style={{ textAlign: "center" }}>Visited Countries:</h5>
      </div>
      <div className="grid">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handelMarkVisit={handelMarkVisit}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
// rsc extention

// for api:
// 1.for data store create a state
// 2. fetach the data by using the useEffect
