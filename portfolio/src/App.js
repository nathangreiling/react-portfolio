import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    {name: 'about', description: 'A bio about me'},
    {name: 'portfolio', description: 'A collection of my work'},
    {name: 'contact', description: 'A way to contact me'},
    {name: 'resume', description: 'A list of my proficiencies'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
