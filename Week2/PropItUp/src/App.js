import React from 'react';
import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person firstName = {"Jane"} lastName={"Doe"} age = {24} hairColor={"black"}></Person>
      <Person firstName = {"John"} lastName={"Smith"} age = {34} hairColor={"brown"}></Person>
      <Person firstName = {"Michael"} lastName={"Jackson"} age = {55} hairColor={"black"}></Person>
      <Person firstName = {"Elon"} lastName={"Musk"} age = {44} hairColor={"brown"}></Person>
    </div>
  );
}

export default App;
