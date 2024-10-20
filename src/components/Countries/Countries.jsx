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
    const newmarkedcontainer = [...marked, country]; //you can't push in react array you need to do in this way spread operator
    setMarked(newmarkedcontainer);
    //     setMarked(country);
    //     console.log(country);
  };
  return (
    <div>
      <h3>Countries:{countries.length}</h3>

      <div className="grid, area">
        <h5 style={{ textAlign: "center" }}>
          Visited Countries:{marked.length}
        </h5>
        <div>
          {marked.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </div>
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
