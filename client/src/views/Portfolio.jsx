import React from 'react'
import ParticleCloudNoLines from '../components/part'

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
         </a> <br/>
         <a href="/doc/br_res.pdf">download</a> resume (updated 01/23) 
    </code>
    </div>
        <ParticleCloudNoLines />
        <div className='portfolio'>
        <code>
            whatever
        </code>
        </div>
    </div>
  )
}

export default Portfolio