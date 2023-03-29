import React from 'react'
import { Link } from 'react-router-dom'
import ParticleCloudCanvas from '../components/part_lines'

const Home = () => {
  return (
    <div>
    <code>brian randall  </code><br/>
    <code style={{fontSize: 'small'}}>
        <Link to={'/portfolio'}> 
            portfolio 
        </Link>
        {' // '}
        <Link to={'/contact'}>
            contact
        </Link>
        <br/>
        <a href="/doc/BRIAN-RANDALL-3-15-23.pdf">download</a> resume (updated 03/23) 
    </code>
    <ParticleCloudCanvas />
    <div className='bio'>
      <code>
        <p>Hello! My name is Brian Randall and I am a web developer and software engineer living somewhere in California. I have a strong background in full-stack development, design, and 10+ years experience in management, logistics & planning. When I'm not at my computer, you can find me on my motorcycle, mountain biking, camping, or at the beach.</p>
        <p>I am constantly pushing myself to learn and grow as a developer and as a human. I thrive with hands-on-experience and learning new skills, crafts, languages, hobbies, whatever. With a strong background in full-stack development, design, management, logistics and planning, I have a well-rounded skillset that allows me to tackle any project that comes my way.</p>
        <p>In addition to my technical skills, I am a highly motivated and detail-oriented individual with a strong work ethic. I pride myself on my ability to collaborate effectively with both technical and non-technical team members, and I am always looking for new ways to improve the user experience.</p>
        <p>However you found yourself here, find my email on the contact page and say hi!</p>
      </code>
    </div>
    </div>
  )
}

export default Home

