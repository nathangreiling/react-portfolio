import React from 'react';
// import selfie from '../../assets/images/'


function About() {
  return (
    <section className="about">
      
      <h2 className="intro"><img src={require('../../assets/images/selfie.jpg')} alt="selfie" className='selfie'></img>Aspiring Web-Developer with a passion to create, resilience to overcome challenges, and the flexibility to work with others.</h2>
      
      <div className="intro-desc">Creation is the start of all great things. Over my career in software engineering, I have been developing my skills in order to make ideas and visions come to life.
      </div>
      
    </section>
  );
}

export default About;