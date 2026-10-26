import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import ParticleCloudNoLines from '../components/part';
import { projectInfo } from '../components/projectInfo';
import projects from '../components/projectCopy.json';

const featuredIds = ['farm-ordering', 'pymuz', 'content-engine', 'please'];
const originalMediaIds = ['body-language', 'wildman', 'soaked', 'brain-wave-viz'];

export default function Portfolio() {
  const [params, setParams] = useSearchParams();
  const selected = projects.find(p => p.id === params.get('project')) || projects[0];
  const mediaIndex = originalMediaIds.indexOf(selected.id);
  const original = mediaIndex >= 0 ? projectInfo[mediaIndex] : {};
  const links = selected.links || original.links || [];
  const featured = projects.filter(p => featuredIds.includes(p.id));
  const other = projects.filter(p => !featuredIds.includes(p.id));
  const navButton = project => <button type="button" key={project.id} aria-pressed={selected.id === project.id} onClick={() => setParams({ project: project.id })}>{project.title}</button>;

  return <>
    <Header /><ParticleCloudNoLines />
    <main className="work-content">
      <div className="section-heading"><p className="eyebrow">SELECTED WORK / CASE STUDIES</p><h1>Things I've figured out and built.</h1><p className="page-intro">Software, automation, integrated systems and hands-on fabrication. Different disciplines, the same habit of getting to the bottom of a problem.</p></div>
      <div className="work-layout">
        <aside className="project-sidebar" aria-label="Project navigation">
          <p className="sidebar-label">SOFTWARE & SYSTEMS</p>
          <nav className="project-nav">{featured.map(navButton)}</nav>
          <p className="sidebar-label">INTERACTIVE & BUILT WORK</p>
          <nav className="project-nav">{other.map(navButton)}</nav>
        </aside>
        <article className="project-detail" key={selected.id}>
          <p className="eyebrow">{selected.category}</p>
          <h2>{selected.title}</h2>
          <p className="project-summary">{selected.summary}</p>
          {selected.status && <p className="project-status"><span className="status-dot" aria-hidden="true" /> {selected.status}</p>}
          <div className="role"><strong>MY CONTRIBUTION</strong><span>{selected.role}</span></div>
          <div className="project-description">{selected.description.map((copy, i) => <p key={i}>{copy}</p>)}</div>
          {selected.system && <div className="system-flow"><h3>SYSTEM / WORKFLOW</h3><p>{selected.system}</p></div>}
          <ul className="tech-list" aria-label="Tools and methods">{(selected.tech || original.tech || []).map(t => <li key={t}>{t}</li>)}</ul>
          {links.length > 0 && <div className="project-links">{links.map(link => <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer">{link.title} <span aria-hidden="true">↗</span></a>)}</div>}
          {selected.examples && <section className="command-examples" aria-label="Usage examples"><h3>AT THE TERMINAL</h3>{selected.examples.map(example => <div key={example.command}><p>{example.label}</p><pre><code>{example.command}</code></pre></div>)}</section>}
          {original.carousel && <div className="project-media">{original.carousel.map((media,i)=><figure key={i}>{media}</figure>)}</div>}
          {featuredIds.includes(selected.id) && <div className="case-note">Work shown here is described at its current development stage. Client source code, credentials and private business data are not published.</div>}
          <div className="case-next"><Link to="/resume">Read my résumé ↗</Link><Link to="/contact">Get in touch ↗</Link></div>
        </article>
      </div>
      <footer className="site-footer"><span>BUILT FOR PRACTICAL PROBLEMS</span><Link to="/">Back to introduction ↗</Link></footer>
    </main>
  </>;
}
