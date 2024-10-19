import './country.css';
const Country = ({country}) => {
      // console.log(country);
      const { name } = country;
      const {flags } =country;
      return (
            <div className="box">
                  <img src={flags.png}alt=""/>
                  <h3>Name:{name?.common}</h3>

            </div>
      );
};

export default Country;