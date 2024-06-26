import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesContainerShimmer from "./CountriesContainerShimmer";

const CountriesContainer = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);
  return (
    <>
      {!countriesData.length ? (
        <CountriesContainerShimmer></CountriesContainerShimmer>
      ) : (
        <div className="countries-container">
          {countriesData
            .filter(
              (country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
            )
            .map((country, index) => {
              return (
                <CountryCard
                  key={index}
                  name={country.name.common}
                  flags={country.flags.png}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital?.[0]}
                ></CountryCard>
              );
            })}
        </div>
      )}
    </>
  );
};

export default CountriesContainer;
