import "../App.css";
import Searchbar from "./Searchbar";
import Selectmenu from "./Selectmenu";
import CountriesContainer from "./CountriesContainer";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <main>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery}></Searchbar>
          <Selectmenu></Selectmenu>
        </div>

        <CountriesContainer query={query}></CountriesContainer>
      </main>
    </>
  );
};

export default Home;
