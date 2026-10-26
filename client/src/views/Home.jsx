import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ParticleCloudCanvas from '../components/part_lines';

const featured = [
  { id: 'farm-ordering', label: '01 / CLIENT SOFTWARE', title: 'Farm inventory & ordering', summary: 'A paid client engagement to replace paper-and-email produce orders with shared inventory, customer ordering and staff workflows.', tags: 'FastAPI · Svelte · Real-time inventory', status: 'In development' },
  { id: 'pymuz', label: '02 / TECHNICAL PRODUCT', title: 'PyMuz', summary: 'Translating complicated roof framing geometry and 3D model measurements into practical cut lists, layouts and documentation.', tags: 'Python · CAD / geometry · Construction', status: 'Active prototype' },
  { id: 'content-engine', label: '03 / AUTOMATION', title: 'Content Engine', summary: 'A local-first automation pipeline connecting research, language models, speech, captions and video assembly.', tags: 'Python · Ollama · FFmpeg', status: 'Working prototype' }
];

export default function Home() {
  return <>
    <Header />
    <ParticleCloudCanvas />
    <main className="home-content">
      <section className="hero" aria-labelledby="home-title">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> TECHNICAL SOLUTIONS · SOFTWARE · AUTOMATION</p>
        <h1 id="home-title">I figure out how things work.<br /><span className="text-muted">Then I make them work better.</span></h1>
        <div className="hero-bottom">
          <div className="intro-copy">
            <p>I build practical software and systems for real-world problems. My background spans full-stack development, workflow automation, electrical work, construction and interactive technology.</p>
            <p>I'm at my best when I can understand a complicated problem, build a solution, and help the people using it understand exactly how it works.</p>
          </div>
          <div className="hero-actions">
            <Link className="action action-primary" to="/portfolio">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="action" to="/resume">View résumé <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="featured-section" aria-labelledby="featured-heading">
        <div className="section-heading"><p className="eyebrow">SELECTED WORK / 2026</p><h2 id="featured-heading">Problems worth solving.</h2></div>
        <div className="featured-grid">
          {featured.map(item => <Link className="feature-card" to={`/portfolio?project=${item.id}`} key={item.id}>
            <div className="feature-top"><span>{item.label}</span><span aria-hidden="true">↗</span></div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="feature-footer"><span>{item.tags}</span><span className="project-state">{item.status}</span></div>
          </Link>)}
        </div>
        <p className="section-footnote">Also: local AI tools, audiovisual installations, physical computing, fabrication and custom builds. <Link to="/portfolio?project=please">See more work ↗</Link></p>
      </section>
      <section className="approach-section" aria-labelledby="approach-heading">
        <p className="eyebrow">HOW I WORK</p><h2 id="approach-heading">Understand it. Build it. Explain it.</h2>
        <div className="approach-grid">
          <div><span className="approach-num">01</span><h3>Find the actual problem</h3><p>Listen to the people doing the work and understand the messy details of their workflow before prescribing a solution.</p></div>
          <div><span className="approach-num">02</span><h3>Own the implementation</h3><p>Connect the software, data, tools and processes needed to turn a rough idea into something usable and testable.</p></div>
          <div><span className="approach-num">03</span><h3>Make it understandable</h3><p>Adapt the explanation to the audience. The people using a system should know what it does, why it works and how to use it.</p></div>
        </div>
      </section>
      <footer className="site-footer"><span>SOQUEL, CALIFORNIA · REMOTE-FRIENDLY</span><Link to="/contact">Let's talk about a problem ↗</Link></footer>
    </main>
  </>;
}
