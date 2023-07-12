import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Work2 } from './components/Work2';
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
      <Work2/>
      <Footer/>
    </div>
  );
}

export default App;
