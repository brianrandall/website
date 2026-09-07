import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ParticleCloudCanvas from '../components/part_lines';
export default function Home() {
 return <><Header/><ParticleCloudCanvas/><main className="home-content"><p className="eyebrow">Creative technologist · Interactive systems developer · Fabricator</p><h1>I build things that live between software and the physical world.</h1><div className="intro-copy"><p>My work connects code, sensors, sound, light and physical structures. I develop interactive audiovisual systems, build software and automation tools, and bring practical experience in electrical work, carpentry and fabrication.</p><p>I’m comfortable moving between a computer, an electronics bench and a jobsite—prototyping behavior, wiring the system, building the environment and troubleshooting how it all works together.</p><p>From live projections to sensor-driven installations and custom treehouses, the thread is the same: making separate parts work as a complete experience.</p></div><Link className="action" to="/portfolio">Explore selected work <span aria-hidden="true">↗</span></Link></main></>;
}
