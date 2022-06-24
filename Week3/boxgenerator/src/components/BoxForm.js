import { useState } from "react";

const BoxForm = (props) => {
  const {boxArray, setBoxArray} = props;
  const [box, setBox] = useState({backgroundColor: '#000', height:0, width:0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxArray([...boxArray, box]);
    // console.log("BOXARRAY", boxArray);
    setBox({backgroundColor: '#000', height: 0, width: 0})
  };
  const handleChange = (e) => {
    setBox ({...box, [e.target.name] : e.target.value});
  };

  return (
    <form onSubmit = {handleSubmit}>
      <label>Color:</label>
      <input type="color" name ="backgroundColor" value={box.backgroundColor} onChange={handleChange} />
      <label htmlFor="">Height:</label>
      <input type="number" name="height" value={box.height} onChange={handleChange}/>
      <label>Width:</label>
      <input type="number" name="width" value={box.width} onChange={handleChange}/>
      <button>Add</button>
    </form>
  )
}

export default BoxForm;