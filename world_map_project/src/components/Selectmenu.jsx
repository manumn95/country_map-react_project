const Selectmenu = ({ setQuery }) => {
  return (
    <>
      <select
        className="filter-by-region"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      >
        <option hidden="">Filter by Region</option>
        <option value="Africa" hidden="">
          Africa
        </option>
        <option value="America" hidden="">
          America
        </option>
        <option value="Asia" hidden="">
          Asia
        </option>
        <option value="Europe" hidden="">
          Europe
        </option>
        <option value="Oceania" hidden="">
          Oceania
        </option>
      </select>
    </>
  );
};

export default Selectmenu;
