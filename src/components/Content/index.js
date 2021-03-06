import React from 'react';
import About from '../About'
import Portfolio from '../Portfolio';
import Contact from '../Contact'
import Resume from '../Resume'

function Content(props) {
   const { currentCategory } = props;

    const render = () => {
    if (currentCategory.name === 'about') {
        return <About></About>
    }
    if (currentCategory.name === 'portfolio') {
        return <Portfolio></Portfolio>
    }
    if (currentCategory.name === 'contact') {
        return <Contact></Contact>
    }
    if (currentCategory.name === 'resume') {
        return <Resume></Resume>
    } 
}
    return (
        <section>
            {/* <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p> */}
            <div>{render()}</div>
        </section>
    )
}

export default Content;