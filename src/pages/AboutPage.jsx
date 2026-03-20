import aboutImg from '../assets/about-gallery.svg'
import { PageHero, Container, Card } from '../components/Layout'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A nonprofit organization built for public value, clarity, and long-term credibility"
        text="Liuli Society is a U.S. nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code. It exists to advance wellness education, research-informed exploration, and community-centered support."
        image={aboutImg}
        imageAlt="About page visual"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Who we are</h3>
              <p>Liuli Society is a mission-driven nonprofit platform designed to communicate responsibility, institutional clarity, and community value.</p>
            </Card>
            <Card>
              <h3>Our mission</h3>
              <p>Our mission is to make wellness learning more understandable, more accessible, and more humane through education, research-informed frameworks, and supportive initiatives.</p>
            </Card>
            <Card>
              <h3>Our vision</h3>
              <p>We envision a future where wellness knowledge, thoughtful design, and trusted community support work together to improve everyday life with credibility and care.</p>
            </Card>
            <Card>
              <h3>Why this structure</h3>
              <p>The nonprofit structure keeps public benefit, mission alignment, and educational value at the center of the work. This website is not a commercial sales platform.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
