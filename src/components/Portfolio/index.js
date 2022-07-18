import React from 'react';

function Portfolio () {

    return (
        <section className='projects'>
            <div class="flex-row">
        <h2 class="section-title primary-border">
        </h2>
      </div>
      <div class="projects">
        <article class="projects">
          <a href="https://murmuring-crag-27720.herokuapp.com/" target="_blank">
            <img src={require('../../assets/images/Screenshot (25).png')} alt="Food Junkies img Missing." className='works'/>
          </a>
          <div class="project-description">
            <h3 class="project-name">The Food Junkies</h3>
            <h4 class="used">Built With </h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>etc.</li>
              </ul>
          </div>
        </article>

        <article class="projects">
          <a href="https://nathangreiling.github.io/Work-Day-Scheduler/" target="_blank">
            <img src={require('../../assets/images/Screenshot (19).png')} alt="Work Day Scheduler img Missing" className='works'/>
          </a>
          <div class="project-description">
            <h3 class="project-name">Work Day Scheduler</h3>
            <h4 class="used">Built With</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </article>

        <article class="projects">
          <a href="https://nathangreiling.github.io/Super-Hero-Wiki/" target="_blank">
            <img src={require('../../assets/images/Screenshot (20).png')} alt="Super Hero Wiki img missing" className='works'/>
          </a>
          <div class="project-description">
            <h3 class="project-name">Super Hero Wiki</h3>
            <h4 class="used">Built With</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Tailwind</li>
              </ul>
          </div>
        </article>

        <article class="projects">
          <a href="https://pacific-harbor-75933.herokuapp.com/" target="_blank">
            <img src={require('../../assets/images/Screenshot (33).png')} alt="Work Day Scheduler img Missing" className='works'/>
          </a>
          <div class="project-description">
            <h3 class="project-name">Give Back</h3>
            <h4 class="used">Built With</h4>
              <ul>
                <li>React.js</li>
                <li>GraphQL</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>etc.</li>
              </ul>
            </div>
          </article>
      </div>
        </section>
    )
}

export default Portfolio;