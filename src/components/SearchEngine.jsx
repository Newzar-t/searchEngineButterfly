import Dropdown from "./Dropdown";

function SearchEngine() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const querySpecies = formData.get("querySpecies");
    const queryPlaces = formData.get("queryPlaces");
    console.log(querySpecies, queryPlaces);
  };
  return (
    <form className="search-area" onSubmit={handleSubmit}>
      <label htmlFor="species" name="species">
        Species
      </label>
      <Dropdown
        id={"selectSpecies"}
        queryName={"querySpecies"}
        label={"Species"}
        placeholder={"Choose a species"}
        value1={"Species1"}
        value2={"Species2"}
        value3={"Species3"}
      />

      <label htmlFor="Place" name="Place">
        Place
      </label>
      <Dropdown
        id={"selectPlace"}
        label={"Place"}
        queryName={"queryPlaces"}
        placeholder={"Choose a place"}
        value1={"Europe"}
        value2={"America"}
        value3={"Asia"}
      />

      <input type="submit" name="Search" />
    </form>
  );
}

export default SearchEngine;
