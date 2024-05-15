import { Link } from "react-router-dom";
const CountryCard = ({ name, flags, population, region, capital }) => {
  return (
    <>
      <Link className="country-card" to={`/${name}`}>
        <div className="flag-container">
          {" "}
          <img src={flags} alt={name + `flags`}></img>
        </div>

        <div className="card-text ">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population:</b>
            {population}
          </p>
          <p>
            <b>Region:</b>
            {region}
          </p>
          <p>
            <b>Capital:</b>
            {capital}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
