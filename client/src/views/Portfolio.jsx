import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import ParticleCloudNoLines from '../components/part';
import { projectInfo } from '../components/projectInfo';
import projects from '../components/projectCopy.json';
export default function Portfolio() {
 const [params,setParams] = useSearchParams();
 const selected = projects.find(p=>p.id===params.get('project')) || projects[0];
 const index = projects.indexOf(selected);
 const original = index < 4 ? projectInfo[index] : {};
 const links = selected.links || original.links || [];
 return <><Header/><ParticleCloudNoLines/><main className="work-content"><p className="eyebrow">Selected work</p><h1>Systems, spaces, sound & light.</h1><nav className="project-nav" aria-label="Select a project">{projects.map(project=><button key={project.id} aria-pressed={selected.id===project.id} onClick={()=>setParams({project:project.id})}>{project.title}</button>)}</nav><article key={selected.id}><p className="eyebrow">{selected.category}</p><h2>{selected.title}</h2><p className="project-summary">{selected.summary}</p><p className="role"><strong>My contribution</strong> {selected.role}</p><div className="project-description">{selected.description.map((text,i)=><p key={i}>{text}</p>)}</div>{selected.system && <div className="system-flow"><h3>How it connects</h3><p>{selected.system}</p></div>}<ul className="tech-list" aria-label="Tools and methods">{(selected.tech || original.tech || []).map(t=><li key={t}>{t}</li>)}</ul>{links.length>0 && <div className="project-links">{links.map(link=><a key={link.link} href={link.link}>{link.title} <span aria-hidden="true">↗</span></a>)}</div>}{selected.examples && <section className="command-examples" aria-label="Usage examples"><h3>At the terminal</h3>{selected.examples.map(example=><div key={example.command}><p>{example.label}</p><pre><code>{example.command}</code></pre></div>)}</section>}{original.carousel && <div className="project-media">{original.carousel.map((media,i)=><figure key={i}>{media}</figure>)}</div>}</article></main></>;
}
