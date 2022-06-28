import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [responseData, setResponseData] = useState([]);

    useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then(response => {setResponseData(response.data.results)})
    }, [])

  return (
    <div className="App">
      {responseData.map((item, i) => {
          return ( <div key={i}>
            <p>{item.name}</p>
            </div>)
      })}
    </div>
  );
}

export default App;
