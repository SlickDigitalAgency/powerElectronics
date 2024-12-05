import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Success from './components/Success';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Navbar />
      <Hero />
      <div className="section-gradient">
        <About />
        <Products />
        <Benefits />
        <Success />
        <Contact />
      </div>
    </div>
  );
}

export default App;