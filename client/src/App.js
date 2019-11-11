import React from 'react';
import './App.css';
import DataFetch from './Components/DataFetch.js';
import Navbar from './Components/NavBar.js';

function App() {

  return (
    <div className="App">
      <Navbar />
      <DataFetch />
    </div>
  );
}

export default App;
