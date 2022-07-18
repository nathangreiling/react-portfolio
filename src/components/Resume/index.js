import React from 'react'

function Resume () {
    return (
        <section className="resume">
            <div className='frontEnd'>
            <h2 className='frontEndP'>Front End Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
                <li>Web Performance</li>
                <li>React.js</li>
            </ul>
            </div>
            <div className='backEnd'>
            <h2 className='backEndP'>Back End Proficiencies</h2>
            <ul>
                <li>Node.js</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>OOP</li>
                <li>Version Control</li>
            </ul>
            </div>
        </section>
    )
}

export default Resume;