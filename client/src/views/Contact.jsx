import React from 'react'
import ParticleCloudNoLines from '../components/part'

const Contact = () => {
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
    </div>
  )
}

export default Contact