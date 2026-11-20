function Dropdown(props) {
  const options = props.options;
  return (
    <select name={props.queryName} className="select" id={props.id}>
      <option defaultValue selected disabled>
        {props.placeholder}
      </option>
      {options.map((opt) => {
        return (
          <option key={opt.name} value={opt.name}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
