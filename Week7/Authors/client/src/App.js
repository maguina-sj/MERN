import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from '../src/views/Main'
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" default/>
        <Route element={<Update />} path="/authors/:id" />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
