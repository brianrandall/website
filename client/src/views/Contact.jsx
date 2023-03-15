import React from 'react'
import ParticleCloudNoLines from '../components/part'
import github from '../components/img/zicon/github.png'
import linkedin from '../components/img/zicon/linkedin.png'
import mail from '../components/img/zicon/mail.png'

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
         <br/>
          <a href="/doc/BRIAN-RANDALL-3-15-23.pdf">download</a> resume (updated 03/23)
    </code>
    </div>
        <ParticleCloudNoLines />
        <div className='contact-container'>
            
              <img src={github} alt='github' style={{width: '50px', height: '50px'}}/>
              <a href='http://github.com/brianrandall'>github.com/brianrandall </a>
              <img src={linkedin} alt='linkedin' style={{width: '50px', height: '50px'}}/>
              <a href='https://www.linkedin.com/in/brian-randall-09b88b251/'>linked'n </a>
              <img src={mail} alt='mail' style={{width: '50px', height: '50px'}}/>
              <a href='mailto:brian19892@gmail.com '>  email me </a>

        </div>
    </div>
  )
}

export default Contact