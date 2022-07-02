import React from 'react';

function Footer() {
    return(
        <footer className='footer'>
            <div>
                <a href="https://github.com/nathangreiling" target="_blank">
                    <img src={require('../../assets/logos/githublogo.png')} alt="GitHub" className='logo'></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/nathan-greiling-7ba81b230/" target="_blank">
                    <img src={require('../../assets/logos/LI-In-Bug.png')} alt="Linked-In" className='logo'></img>
                </a>
            </div>
            <div>
                <a href="https://stackoverflow.com/users/19464534/nathan-greiling" target="_blank">
                    <img src={require('../../assets/logos/logo-stackoverflow.png')} alt="stack overflow" className='logo'></img>
                </a>
            </div>
        </footer>
    );
};

export default Footer;