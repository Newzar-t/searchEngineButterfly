import { useState } from "react";
import Dropdown from "./Dropdown";

function SearchEngine() {
  const [datas, setDatas] = useState([]);

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

  const colors = [
    { name: "white" },
    { name: "yellow" },
    { name: "orange" },
    { name: "red" },
    { name: "blue" },
    { name: "green" },
    { name: "brown" },
    { name: "black" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRequest();
    const form = event.target;
    const formData = new FormData(form);
    const queryPlaces = formData.get("queryPlaces");
    const queryFamilies = formData.get("queryFamilies");
    const queryHabitats = formData.get("queryHabitats");
    const queryColors = formData.get("queryColors");
    const globalQuery = {
      queryPlaces,
      queryFamilies,
      queryHabitats,
      queryColors,
    };
    const results = datas.filter(
      (item) =>
        item.places.includes(globalQuery.queryPlaces) &&
        item.families.includes(globalQuery.queryFamilies) &&
        item.habitats.includes(globalQuery.queryHabitats) &&
        item.colors.includes(globalQuery.queryColors),
    );

    console.log(results);
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

      <label htmlFor="Colors" name="Colors">
        Colors
      </label>
      <Dropdown
        id={"selectColors"}
        label={"Colors"}
        queryName={"queryColors"}
        placeholder={"Choose a color"}
        options={colors}
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
