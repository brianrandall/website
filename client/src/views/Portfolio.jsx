import React from 'react'
import ParticleCloudNoLines from '../components/part'
import ParticleCloudCanvas from '../components/part_lines'

const Portfolio = () => {
  return (
    <div>
        <div className='header'>
        <a href='/' style={{textDecoration: 'none'}}>
            <code>brian randall </code><br/>
        </a>
        <code style={{fontSize: 'small'}}>
        <a href='/portfolio'>
            portfolio 
        </a>
        {' // '}
        <a href='/contact'>
            contact
         </a>
    </code>
    </div>
        <ParticleCloudNoLines />
        <div className='portfolio'>
            <code>
                <p>
                    coming soon...
                </p>
            </code>
        </div>
    </div>
  )
}

export default Portfolio