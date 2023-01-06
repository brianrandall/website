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
    </code>
    <ParticleCloudCanvas />
    <code>
     Hello! My name is [Insert Name Here] annnnnnnnd I am a passionate web developer and software engineer with a love for the great outdoors. When I'm not writing code, you can usually find me hiking through the mountains or exploring new trails on my bike. But even when I'm out enjoying nature, my love for creative coding always manages to find its way into my activities.

Whether it's tinkering with the latest JavaScript library or designing a new website, I am constantly pushing myself to learn and grow as a developer. With a strong background in both front-end and back-end development, I have a well-rounded skillset that allows me to tackle any project that comes my way.

In addition to my technical skills, I am a highly motivated and detail-oriented individual with a strong work ethic. I pride myself on my ability to collaborate effectively with both technical and non-technical team members, and I am always looking for new ways to improve the user experience.

So whether I'm coding up a storm or hitting the trails, I am always striving to make the most of every opportunity that comes my way.
    </code>
    </div>
  )
}

export default Home

