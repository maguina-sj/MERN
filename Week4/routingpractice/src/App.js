import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import './App.css';

const Home = (props) => {
  return (<h1>Welcome</h1>)
}

const Param = (props) => {
  const {param, color, bgColor} = useParams(); 
  return (
    isNaN(param) ? 
      <h1 style={ color? {color: color, backgroundColor: bgColor}:null}>The word is: {param}</h1> 
    : 
      <h1>The number is: {param}</h1>
    )
  }

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<Param />}/>
        <Route path="/:param/:color/:bgColor" element={<Param />} /> 
      </Routes>
    </div>
    </BrowserRouter>
  )
};


export default App;
