const Searchbar = ({ setQuery }) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      ></input>
    </div>
  );
};

export default Searchbar;
