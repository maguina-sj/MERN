import {useState} from 'react';
import './App.css';
import BoxArray from './components/BoxArray';
import BoxForm from './components/BoxForm';

function App() {
  const [boxArray, setBoxArray] = useState([]);
  return (
    <div className="App">
      <BoxForm boxArray={boxArray} setBoxArray = {setBoxArray}/>
      <BoxArray boxArray={boxArray}/>
    </div>
  );
}

export default App;
