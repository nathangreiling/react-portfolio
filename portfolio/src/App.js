import React from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
