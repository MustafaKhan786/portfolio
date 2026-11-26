const code = [
  { i: 0, p: [['k', 'const '], ['f', 'developer'], ['', ' = {']] },
  { i: 1, p: [['', 'name: '], ['s', "'Mustafa Khan'"], ['', ',']] },
  { i: 1, p: [['', 'role: '], ['s', "'React Developer'"], ['', ',']] },
  { i: 1, p: [['', 'stack: '], ['s', "['React', 'Flutter']"], ['', ',']] },
  { i: 1, p: [['', 'openToWork: '], ['k', 'true'], ['', ',']] },
  { i: 0, p: [['', '}']] },
]

function Hero({ name, role, intro, onContact }) {
  return (
    <section className="hero">
      <div>
        <span className="badge"><span className="dot" /> Open to opportunities</span>
        <h1>Hi, I'm <span className="grad">{name}</span></h1>
        <h2>{role}</h2>
        <p>{intro}</p>
        <div className="actions">
          <a className="btn primary" href="#work">Explore My Work</a>
          <a className="btn ghost" href="#work" onClick={onContact}>Get In Touch</a>
        </div>
      </div>

      <div className="code">
        <div className="code-top"><i /><i /><i /><span>developer.js</span></div>
        <div className="code-body">
          {code.map((line, n) => (
            <div key={n} style={{ paddingLeft: line.i * 22 }}>
              {line.p.map(([cls, text], j) => (
                <span key={j} className={cls}>{text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero