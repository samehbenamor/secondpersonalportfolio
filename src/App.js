import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Work } from './components/Work';
import { SlidingStrip } from './components/SlidingStrip';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SlidingStrip/>
      <Work/>
    </div>
  );
}

export default App;
