import { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const tabs = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [active, setActive] = useState('skills')

  return (
    <>
      <nav className="nav">
        <span className="logo">Mustafa<span>.dev</span></span>
        <a className="nav-btn" href="https://github.com/MustafaKhan786" target="_blank" rel="noreferrer">GitHub</a>
      </nav>

      <Hero
        name="Mustafa Khan"
        role="React Developer"
        intro="I build responsive web interfaces with React and cross-platform mobile apps with Flutter, with a focus on clean code and smooth user experience."
        onContact={() => setActive('contact')}
      />

      <main className="work" id="work">
        <div className="tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab ${active === t.id ? 'active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="panel" key={active}>
          {active === 'skills' && <Skills />}
          {active === 'projects' && <Projects />}
          {active === 'contact' && <Contact />}
        </div>
      </main>

      <footer>© 2026 Mustafa Khan · Built with React + Vite</footer>
    </>
  )
}

export default App