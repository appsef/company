import React from 'react'
import './App.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Section from './components/Section';
import SectionG from './components/SectionG';


function App() {
  return (
    <div className="mx-auto w-auto flex flex-col bg-white">
      <AppBar/>

      <Section orientation="0"/>
      <Section orientation="1"/>
      <SectionG />
      
      <Footer />
    </div>
  );
}

export default App;
