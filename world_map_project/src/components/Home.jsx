import Searchbar from "./Searchbar";
import Selectmenu from "./Selectmenu";
import CountriesContainer from "./CountriesContainer";
import {  useState } from "react";
import { useTheme } from "../hooks/useTheme";


const Home = () => {
  const [query, setQuery] = useState("");
const[isdark]=useTheme();
  return (
    <>
      <main className={`${isdark?'dark':''}`}>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery}></Searchbar>
          <Selectmenu setQuery={setQuery}></Selectmenu>
        </div>

        <CountriesContainer query={query}></CountriesContainer>
      </main>
    </>
  );
};

export default Home;
