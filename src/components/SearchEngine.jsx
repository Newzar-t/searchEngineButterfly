import Dropdown from "./Dropdown";

function SearchEngine() {
  const places = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "America",
    },
  ];

  const species = [
    {
      name: "Papillon",
    },
    {
      name: "Paodozk",
    },
    {
      name: "Pokeov",
    },
  ];
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
        options={species}
      />

      <label htmlFor="Place" name="Place">
        Place
      </label>
      <Dropdown
        id={"selectPlace"}
        label={"Place"}
        queryName={"queryPlaces"}
        placeholder={"Choose a place"}
        options={places}
      />

      <input type="submit" name="Search" />
    </form>
  );
}

export default SearchEngine;
