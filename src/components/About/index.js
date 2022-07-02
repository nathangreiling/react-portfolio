import React from 'react';
// import selfie from '../../assets/images/'


function About() {
  return (
    <section className="">
      <h2 id="about">About Me</h2>
      <img src={require('../../assets/images/selfie.jpg')} alt="selfie" className='selfie'></img>
      <h2>Aspiring Web-Developer with a passion to create, resilience to overcome challenges, and the flexibility to work with others.</h2>
      <div>Creation is the start of all great things. Over my career in software engineering, I have been developing my skills in order to create applications on the web...</div>
    </section>
  );
}

export default About;