import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ParticleCloudNoLines from '../components/part';
export default function Contact() {
  return <><Header/><ParticleCloudNoLines/><main className="contact-content">
    <p className="eyebrow">GET IN TOUCH</p><h1>Have a complicated problem?<br/><span className="text-muted">I'd like to hear about it.</span></h1>
    <p className="page-intro">I'm interested in practical software, workflow automation, implementation, technical problem-solving and customer-facing engineering. Based in Soquel, California and open to remote opportunities.</p>
    <div className="contact-links"><a href="mailto:brian19892@gmail.com">brian19892@gmail.com ↗</a><a href="https://github.com/brianrandall" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/brian-randall-09b88b251/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link to="/resume">Résumé ↗</Link></div>
    <footer className="site-footer"><span>SOQUEL, CALIFORNIA</span><Link to="/portfolio">Selected work ↗</Link></footer>
  </main></>;
}
