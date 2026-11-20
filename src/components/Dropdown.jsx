function Dropdown(props) {
  const optionsNumber = props.optionsNumber;
  return (
    <select name={props.queryName} className="select" id={props.id}>
      <option defaultValue selected disabled>
        {props.placeholder}
      </option>
{/*       {for(let i = 0; i < optionsNumber; i++){
        return()
      }} */}
      <option value={props.value1}>{props.value1}</option>
      <option value={props.value2}>{props.value2}</option>
      <option value={props.value3}>{props.value3}</option>
    </select>
  );
}

export default Dropdown;
