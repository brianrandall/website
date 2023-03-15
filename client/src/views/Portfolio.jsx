import React from 'react'
import { useState } from 'react'
import ParticleCloudNoLines from '../components/part'
import { projectInfo } from '../components/projectInfo'

const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(projectInfo[0])

  return (
    <div>
        <div className='header'>
        <a href='/' style={{textDecoration: 'none'}}>
            <code>brian randall</code> <br/>
        </a>
        <code style={{fontSize: 'small'}}>
        <a href='/portfolio'>
            portfolio 
        </a>
        {' // '}
        <a href='/contact'>
            contact
         </a> <br/>
         <a href="/doc/BRIAN-RANDALL-3-15-23.pdf">download</a> resume (updated 03/23) 
    </code>
    </div>
        <ParticleCloudNoLines />
        <div className='portfolio-container'>
            <div className='portfolio-title' onClick={() => setSelectedProject(projectInfo[0])}>
                <code>twitter.lite</code>
            </div>
            <div className='portfolio-title' onClick={() => setSelectedProject(projectInfo[1])}>
                <code> babylon dot com </code>
            </div>
            <div className='portfolio-title' onClick={() => setSelectedProject(projectInfo[2])}>
                <code>body language</code>
            </div>
            <div className='portfolio-title' onClick={() => setSelectedProject(projectInfo[3])}>
                <code>wildman</code>
            </div> 
            <div className='portfolio-title' onClick={() => setSelectedProject(projectInfo[4])}>
                <code>soaked</code>
            </div>
            <div className='portfolio-title' onClick={() => setSelectedProject(projectInfo[5])}>
                <code>brain wave viz</code>
            </div>
        </div>
        <div className='portfolio-item'>
            <code>
                <h2 style={{marginBottom: '0.2rem'}}>
                    {selectedProject.title} 
                </h2>
                <div style={{marginBottom: '0.5rem'}}>
                {selectedProject.links.map(li =>
                    <div>
                    <a href={li.link}>{li.title}</a> 
                    </div>
                    )}
                </div>
                {selectedProject.description.map(desc =>
                    <p style={{fontSize: 'small', fontStyle: 'oblique'}}>
                        {desc}
                    </p>
                    )}
                
                <p style={{marginTop: '0.9rem'}}>...built using...</p>
                {selectedProject.tech.map(tech =>
                    <span>
                        {tech}
                        {tech !== selectedProject.tech[selectedProject.tech.length -1] ? ', ' : ''}
                    </span>
                    )}
                    <hr/>
                    {selectedProject.carousel.map(car =>
                    <div>
                        {car}
                    </div>
                    )}
            </code>
        </div>
    </div>
  )
}

export default Portfolio