import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [marked, setMarked] = useState([]);
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelMarkVisit = (country) => {
    // console.log("I've visited the state");
    const newmarkedcontainer = [...marked, country]; //you can't push in react array you need to do in this way spread operator
    setMarked(newmarkedcontainer);
    //     console.log(country);
  };
  // language

  const handelLnguageCheck = (Mylanguage) => {
    setLanguage(Mylanguage);
    const newlang = [...language, Mylanguage];
    setLanguage(newlang);
  };
  return (
    <div style={{ border: "2px solid green" }}>
      <h3>Countries:{countries.length}</h3>
      {/* visited countries  */}
      <div className="grid, area">
        <h5 style={{ textAlign: "center" }}>
          Visited Countries:{marked.length}
        </h5>
        <div
          style={{
            display: "flex",
            gap: "5px",
            // border: "2px solid grey",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ border: "2px solid grey" }}>
            <div style={{}}>
              {marked.map((country) => (
                <img src={country.flags.png} key={country.cca3} alt="" />
              ))}
            </div>
            <div>
              {marked.map((country) => (
                <h3 key={country.cca3}>{country.name.common}</h3>
              ))}
            </div>
            {/* language */}
            <div>
              {language.map((lang) => {
                <p key={lang.eng}>{lang}</p>;
              })}
            </div>
          </div>
        </div>
        {/* display Country */}
        <div className="grid">
          {countries.map((country) => (
            <Country
              country={country}
              key={country.cca3}
              handelMarkVisit={handelMarkVisit}
              handelLnguageCheck={handelLnguageCheck}
            ></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
// rsc extention

// for api:
// 1.for data store create a state
// 2. fetach the data by using the useEffect
