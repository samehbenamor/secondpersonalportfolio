import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
