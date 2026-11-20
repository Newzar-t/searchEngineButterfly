function Dropdown() {
  return (
    <div className="select-group">
      <label htmlFor="select-hint">Species</label>
      <select className="select">
        <option value={"1"} selected disabled>
          Choose a specie
        </option>
        <option value={"2"}>Specie 1</option>
        <option value={"3"}>Specie 2</option>
        <option value={"4"}>Specie 4</option>
      </select>
    </div>
  );
}

export default Dropdown;
