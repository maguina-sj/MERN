import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then(response => {
        
        return response.json()
      })
      .then(response => {
        console.log(response.results)
        setState({
          name: response.results
        })
      .catch(err => {
        console.log(err);
      })
      })
  }, [])
  

  return (
    <div className="App">
      {state.name ? state.name.map((item, i) => {
        return (<div key ={i}> {item.name}</div>)
      }):null}
    </div>
  );
}

export default App;
