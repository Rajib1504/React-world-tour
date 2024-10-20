import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, population, area } = country;
  return (
    <div className="box">
      <img src={flags.png} alt="" />
      <div className="flex">
        <h3 className="border">Name:{name.common}</h3>
        <p className="border">Population:{population}</p>
        <p className="border">area:{area}</p>
      </div>
    </div>
  );
};

export default Country;
