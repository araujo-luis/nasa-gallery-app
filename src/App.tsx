import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar />
        <Gallery/>
    </div>
  );
}

export default App;
