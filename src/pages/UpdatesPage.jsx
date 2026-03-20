import supportImg from '../assets/support-foundation.svg'
import { PageHero, Container, Card } from '../components/Layout'

const updates = [
  ['Institutional update', 'Strengthening the nonprofit platform foundation', 'We are refining the structure, language, and presentation of Liuli Society to better serve academic, nonprofit, and community audiences.'],
  ['Education', 'Why education comes before intervention', 'Our work begins with understanding. Education helps people make informed decisions and engage more thoughtfully with supportive daily practices.'],
  ['Research note', 'Building a calm and credible innovation model', 'Liuli Society is shaping a nonprofit framework for responsible exploration, community learning, and mission-aligned growth.'],
]

export default function UpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Updates"
        title="A publishing section for educational, institutional, and mission-driven content"
        text="This space is designed for project updates, articles, community events, and reflective notes while preserving a calm nonprofit tone."
        image={supportImg}
        imageAlt="Updates page visual"
      />
      <section className="section">
        <Container>
          <div className="grid-3">
            {updates.map(([label, title, text]) => (
              <Card key={title}>
                <div className="tag">{label}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
