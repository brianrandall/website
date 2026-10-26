import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Entry = ({ title, subtitle, children }) => <section className="resume-entry"><div className="resume-entry-head"><h3>{title}</h3><span>{subtitle}</span></div><ul>{children}</ul></section>;

export default function Resume() {
  return <>
    <div className="screen-only"><Header /></div>
    <main className="resume-page" id="resume" aria-labelledby="resume-title">
      <div className="resume-controls screen-only"><Link to="/portfolio">← Selected work</Link><button type="button" onClick={() => window.print()}>Print / Save as PDF ↗</button></div>
      <div className="resume-paper">
        <header className="resume-masthead">
          <p className="eyebrow">SOFTWARE · SYSTEMS · CLIENT IMPLEMENTATION</p>
          <h1 id="resume-title">BRIAN RANDALL</h1>
          <p className="resume-role">Technical Solutions & Automation</p>
          <div className="resume-contact"><span>Soquel, California</span><a href="mailto:brian19892@gmail.com">brian19892@gmail.com</a><a href="tel:+16616453531">(661) 645-3531</a><a href="https://github.com/brianrandall">github.com/brianrandall</a></div>
        </header>
        <section className="resume-section">
          <h2>PROFILE</h2>
          <p>Client-facing technical builder who turns ambiguous operational problems into working software and practical solutions. Experience spans full-stack development, automation, independent contracting and complex physical systems. Comfortable owning a problem from requirements and technical design through implementation, troubleshooting and stakeholder walkthroughs—and explaining technical details to people with different levels of expertise.</p>
        </section>
        <section className="resume-section">
          <h2>SELECTED SOLUTIONS & CLIENT WORK</h2>
          <Entry title="Independent Software Developer — Paid Farm Client Engagement" subtitle="2026–present · Planned spring 2027 rollout">
            <li>Designing an inventory and customer-ordering platform to replace a produce farm's manual paper-and-email ordering process; working directly with the business owner on requirements and workflow design.</li>
            <li>Built FastAPI / SQLAlchemy services and a Svelte interface for staff and customers, with shared stock calculations, WebSocket inventory updates, ordering and invoice workflows.</li>
            <li>Demonstrated a staff-only staging and publishing workflow during an owner walkthrough, addressing concerns about customers seeing next week's availability prematurely.</li>
            <li>Continuing development of pricing tiers, stock administration and reporting for the planned organization-wide rollout.</li>
          </Entry>
          <Entry title="PyMuz — Independent Software Product Development" subtitle="2026–present · Active prototype">
            <li>Developing browser-based construction planning tools that analyze model geometry and generate cut lists, roof plans and annotated documentation.</li>
            <li>Turning complex field rules—unequal roof pitches, hips, valleys, compound cuts and birdsmouth geometry—into explicit calculations and practical build instructions.</li>
            <li>Designing import and preview workflows for unusual framing conditions; validating output as development continues.</li>
          </Entry>
          <Entry title="Tensorpunk — Full-Stack Engineer" subtitle="2023 · Four-month engagement">
            <li>Contributed to TOME, an AI/audio-focused SaaS application, across Python/Flask, React, PostgreSQL, REST APIs, testing and AWS/GitHub deployment tooling.</li>
          </Entry>
        </section>
        <section className="resume-section">
          <h2>TECHNICAL CAPABILITIES</h2>
          <p><strong>Solutions:</strong> Requirements discovery, workflow design, client walkthroughs, technical explanation, root-cause troubleshooting, API integration, testing and process automation.</p>
          <p><strong>Tools:</strong> Python, FastAPI, Flask, SQL/SQLAlchemy, PostgreSQL, REST APIs, JSON, JavaScript, Svelte, React, WebSockets, Git/GitHub, Docker, AWS, macOS/Linux, local LLM tooling.</p>
        </section>
        <section className="resume-section resume-experience">
          <h2>ADDITIONAL PROFESSIONAL EXPERIENCE</h2>
          <Entry title="Nelson Treehouse and Supply — Carpenter" subtitle="2026 · Wisconsin">
            <li>Helped build 20+ custom treehouses with a team, spanning structural framing, rigging, rope access, exterior work and finish construction; solved unusual field problems.</li>
          </Entry>
          <Entry title="Sightline Construction — Carpenter / Electrical Work" subtitle="2024–2025 · Santa Cruz, CA">
            <li>Worked across high-end custom residential construction, finish and structural carpentry, residential electrical installation and coordination with other trades.</li>
          </Entry>
          <Entry title="Always Current Electric — Apprentice Electrician" subtitle="2023–2024 · Boulder Creek, CA">
            <li>Supported residential electrical installation, service and troubleshooting alongside journeyman electricians.</li>
          </Entry>
          <Entry title="Blue Meadow Builders LLC — Independent General Contractor" subtitle="2019–2022 · Portland, OR">
            <li>Ran an independent remodeling and construction business, working directly with homeowners on scope, technical options, materials and delivery.</li>
          </Entry>
          <Entry title="Sargent House — Digital Marketing / Creative Production" subtitle="2017–2019">
            <li>Worked with musicians and creative clients to translate ideas into campaigns, visual deliverables and production-ready media.</li>
          </Entry>
        </section>
        <section className="resume-section">
          <h2>OTHER SELECTED TECHNICAL WORK</h2>
          <p><strong>PLEASE:</strong> Local AI terminal assistant proposing shell commands with validation, previews and confirmation.</p>
          <p><strong>Content Engine:</strong> Python automation connecting research, local LLMs, speech, captions and media assembly.</p>
          <p><strong>Interactive systems:</strong> Sensor-driven installations and custom lighting using Arduino, OSC, Max/MSP, Kinect and DMX; work featured by VICE / The Creators Project and Vidvox.</p>
        </section>
        <section className="resume-section resume-education">
          <h2>EDUCATION</h2>
          <p><strong>Software Engineering / Full-Stack Web Development Certificate</strong> · 2022<br />Coding Dojo program (later acquired by Colorado Technical University).</p>
        </section>
        <div className="resume-bottom screen-only">For examples and project context, visit <Link to="/portfolio">selected work ↗</Link></div>
      </div>
    </main>
  </>;
}
