const groups = [
  { icon: '</>', title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { icon: '▢', title: 'Mobile', items: ['Flutter', 'Dart'] },
  { icon: '⚙', title: 'Tools', items: ['Git', 'GitHub'] },
]

function Skills() {
  return (
    <>
      <h2 className="panel-title">Skills</h2>
      <p className="panel-sub">Technologies I work with</p>
      <div className="grid">
        {groups.map((g) => (
          <div className="card" key={g.title}>
            <div className="icon">{g.icon}</div>
            <h3>{g.title}</h3>
            <div className="chips">
              {g.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills