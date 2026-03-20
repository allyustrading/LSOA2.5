import { ArrowRight, BookOpen, HeartHandshake, Microscope, Users } from 'lucide-react'
import homeImg from '../assets/home-editorial.svg'
import atlasImg from '../assets/pathways-atlas.svg'
import researchImg from '../assets/research-studio.svg'
import { Container, SectionTitle, Card } from '../components/Layout'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Liuli Society at a glance</div>
              <h1 className="display">
                A new nonprofit design direction for education, research, and community trust
              </h1>
              <p className="lead">
                Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing
                research-informed wellness education, thoughtful innovation, and
                community-centered support. This version presents a darker editorial
                theme with a more institutional and gallery-like feel.
              </p>
              <div className="hero-actions">
                <a href="#/about" className="button button-dark">About Liuli Society</a>
                <a href="#/approach" className="button button-light">Explore our approach</a>
              </div>
              <div className="hero-statbar">
                <div className="stat"><strong>501(c)(3)</strong><span>Registered nonprofit structure</span></div>
                <div className="stat"><strong>Education-first</strong><span>Clear nonprofit-safe language</span></div>
                <div className="stat"><strong>UNH BIC context</strong><span>Innovation-oriented positioning</span></div>
                <div className="stat"><strong>Community-centered</strong><span>Trust, support, and learning</span></div>
              </div>
            </div>

            <div className="hero-panel">
              <img src={homeImg} alt="Editorial nonprofit visual for Liuli Society" className="hero-image" />
              <div className="hero-copy">
                <div className="tag">Nonprofit institutional website</div>
                <p className="page-text">
                  This website is designed to present Liuli Society as a credible nonprofit
                  platform, not as a commercial product site. The message remains focused on
                  education, research-informed innovation, and community value.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Core positioning"
            title="A clearer public-facing model for mission, learning, and responsible growth"
            text="The site is structured to support trust with universities, donors, community partners, and future collaborators."
          />
          <div className="grid-3" style={{ marginTop: 28 }}>
            <Card>
              <BookOpen size={24} />
              <h3 style={{ marginTop: 18 }}>Wellness education</h3>
              <p>We present wellness knowledge in accessible language that emphasizes understanding, daily support, and public benefit.</p>
            </Card>
            <Card>
              <Microscope size={24} />
              <h3 style={{ marginTop: 18 }}>Research-informed innovation</h3>
              <p>We frame innovation as responsible exploration, refinement, and learning rather than product marketing.</p>
            </Card>
            <Card>
              <HeartHandshake size={24} />
              <h3 style={{ marginTop: 18 }}>Companion-centered support</h3>
              <p>We value listening, follow-through, and trust-building through community-centered relationships and long-term care.</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split-banner">
            <div className="banner-copy">
              <div className="eyebrow">Wellness pathways</div>
              <h2 className="section-title">A nine-pathway framework built for clarity and everyday relevance</h2>
              <p className="section-text">
                The Liuli framework organizes wellness themes into pathways rather than
                products. This makes the site easier to understand in educational,
                nonprofit, and research-oriented contexts.
              </p>
              <a href="#/pathways" className="button button-gold" style={{ marginTop: 12 }}>
                View all pathways <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </a>
            </div>
            <div className="banner-image">
              <img src={atlasImg} alt="Pathways visual" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split-banner">
            <div className="banner-image">
              <img src={researchImg} alt="Research and innovation visual" />
            </div>
            <div className="banner-copy">
              <div className="eyebrow">Research and community</div>
              <h2 className="section-title">Serious enough for institutions, warm enough for communities</h2>
              <p className="section-text">
                This alternative version uses a stronger editorial theme to signal
                professionalism while preserving a humane, mission-driven voice.
              </p>
              <div className="grid-2" style={{ marginTop: 14 }}>
                <Card><Users size={20} /><p style={{ marginTop: 10 }}>Community learning and pilot initiatives</p></Card>
                <Card><Microscope size={20} /><p style={{ marginTop: 10 }}>Exploratory innovation within a nonprofit frame</p></Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
