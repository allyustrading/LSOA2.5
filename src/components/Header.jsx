const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Approach', 'approach'],
  ['Pathways', 'pathways'],
  ['Research', 'research'],
  ['Community', 'community'],
  ['Updates', 'updates'],
  ['Support', 'support'],
  ['Contact', 'contact'],
]

export default function Header({ route }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#/home" className="brand">
          <div className="brand-title">Liuli Society</div>
          <div className="brand-subtitle">
            Research-informed wellness education and community innovation
          </div>
        </a>

        <nav className="nav">
          {navItems.map(([label, key]) => (
            <a
              key={key}
              href={`#/${key}`}
              className={route === key ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#/contact" className="button button-gold">Connect</a>
      </div>
    </header>
  )
}
