import { NavLink, Link } from 'react-router-dom';
export default function Header() {
  return <header className="header"><Link className="wordmark" to="/" aria-label="Brian Randall home">BRIAN <span>RANDALL</span><small> / TECHNICAL SOLUTIONS</small></Link><nav aria-label="Main navigation"><NavLink to="/" end>about</NavLink><NavLink to="/portfolio">work</NavLink><NavLink to="/resume">résumé</NavLink><NavLink to="/contact">contact</NavLink></nav></header>;
}
