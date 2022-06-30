import React from 'react';

function Nav() {

  return (
    <header>
        <h2>
            <a href="/">
                <span></span> Nathan Greiling
            </a>
        </h2>
        <nav>
            <ul className='flex-row'>
                <li className=''>
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li className=''>
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li className=''>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
                <li className=''>
                    <a href="#resume">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;