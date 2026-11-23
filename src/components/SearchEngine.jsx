import { useState } from "react";
import Dropdown from "./Dropdown";

function SearchEngine() {
  const [datas, setDatas] = useState([]);
  const [request, setRequest] = useState([]);

  async function searchRequest() {
    try {
      const res = await fetch("../src/butterfly.json");
      const datas = await res.json();
      setDatas(datas);
    } catch (err) {
      console.error(err);
    }
  }

  const places = [
    { name: "Europe" },
    { name: "Asia" },
    { name: "Africa" },
    { name: "North America" },
    { name: "South America" },
    { name: "Oceania" },
  ];

  const families = [
    { name: "Papilionidae" },
    { name: "Pieridae" },
    { name: "Nymphalidae" },
    { name: "Lycaenidae" },
    { name: "Riodinidae" },
    { name: "Hesperiidae" },
    { name: "Saturniidae" },
    { name: "Sphingidae" },
  ];

  const habitats = [
    { name: "meadow" },
    { name: "dry grassland" },
    { name: "forest" },
    { name: "forest edge" },
    { name: "wetland" },
    { name: "mountain" },
    { name: "garden" },
    { name: "tropical forest" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRequest();
    const form = event.target;
    const formData = new FormData(form);
    const queryPlaces = formData.get("queryPlaces");
    const queryFamilies = formData.get("queryFamilies");
    const queryHabitats = formData.get("queryHabitats");
    const globalQuery = {
      queryPlaces,
      queryFamilies,
      queryHabitats,
    };

    const results = datas.filter(
      (item) =>
        item.places.includes(globalQuery.queryPlaces) &&
        item.families.includes(globalQuery.queryFamilies) &&
        item.habitats.includes(globalQuery.queryHabitats),
    );
    setRequest(results);

    console.log(request);
  };

  return (
    <form className="search-area" onSubmit={handleSubmit}>
      <label htmlFor="species" name="species">
        families
      </label>
      <Dropdown
        id={"selectSpecies"}
        queryName={"queryFamilies"}
        label={"family"}
        placeholder={"Choose a family"}
        options={families}
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

      <label htmlFor="habitats" name="habitats">
        habitats
      </label>
      <Dropdown
        id={"selectHabitats"}
        label={"habitats"}
        queryName={"queryHabitats"}
        placeholder={"Habitats"}
        options={habitats}
      />

      <input type="submit" name="Search" />
    </form>
  );
}

export default SearchEngine;
