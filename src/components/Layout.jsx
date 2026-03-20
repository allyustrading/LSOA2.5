export function Container({ children }) {
  return <div className="container">{children}</div>
}

export function PageHero({ eyebrow, title, text, image, imageAlt }) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero-grid">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="page-title">{title}</h1>
            <p className="page-text">{text}</p>
          </div>
          <div className="hero-image-frame">
            <img src={image} alt={imageAlt} className="hero-image" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>
}
