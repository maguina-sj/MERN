import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import './App.css';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="/" default/>
        <Route element={<OneProduct />} path="/products/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
