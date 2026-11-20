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
    {
      name: "Europe",
    },
    {
      name: "Asie",
    },
    {
      name: "Afrique",
    },
    {
      name: "Amérique du Nord",
    },
    {
      name: "Amérique du Sud",
    },
    {
      name: "Océanie",
    },
  ];

  const families = [
    {
      name: "Papilionidae",
    },
    {
      name: "Pieridae",
    },
    {
      name: "Nymphalidae",
    },
    {
      name: "Lycaenidae",
    },
    {
      name: "Riodinidae",
    },
    {
      name: "Hesperiidae",
    },
    {
      name: "Saturniidae",
    },
    {
      name: "Sphingidae",
    },
  ];

  const habitats = [
    {
      name: "prairie",
    },
    {
      name: "pelouse sèche",
    },
    {
      name: "forêt",
    },
    {
      name: "lisière",
    },
    {
      name: "zone humide",
    },
    {
      name: "montagne",
    },
    {
      name: "jardin",
    },
    {
      name: "forêt tropicale",
    },
  ];

  const colors = [
    {
      name: "blanc",
    },
    {
      name: "jaune",
    },
    {
      name: "orange",
    },
    {
      name: "rouge",
    },
    {
      name: "bleu",
    },
    {
      name: "vert",
    },
    {
      name: "brun",
    },
    {
      name: "noir",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const query = formData.getAll("query");
    searchRequest();
    console.log(datas);
  };

  return (
    <form className="search-area" onSubmit={handleSubmit}>
      <label htmlFor="species" name="species">
        families
      </label>
      <Dropdown
        id={"selectSpecies"}
        queryName={"query"}
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
        queryName={"query"}
        placeholder={"Choose a place"}
        options={places}
      />

      <label htmlFor="Colors" name="Colors">
        Colors
      </label>
      <Dropdown
        id={"selectColors"}
        label={"Colors"}
        queryName={"query"}
        placeholder={"Choose a color"}
        options={colors}
      />

      <label htmlFor="habitats" name="habitats">
        habitats
      </label>
      <Dropdown
        id={"selectHabitats"}
        label={"habitats"}
        queryName={"query"}
        placeholder={"Habitats"}
        options={habitats}
      />

      <input type="submit" name="Search" />
    </form>
  );
}

export default SearchEngine;
