import approachImg from '../assets/approach-grid.svg'
import { PageHero, Container, Card } from '../components/Layout'

const steps = [
  ['Knowledge first', 'Our approach begins with understanding. Education provides a foundation for more thoughtful choices and more responsible engagement.'],
  ['Understanding to design', 'We explore design logic grounded in real-life needs, practical use, and mission-driven purpose.'],
  ['Design to daily support', 'The goal is to translate ideas into meaningful learning, routines, and supportive community experiences.'],
  ['Companion support', 'We value follow-up, listening, and long-term supportive relationships rather than one-time interactions.'],
  ['Long-term trust', 'Trust grows through clarity, consistency, and a responsible public-facing nonprofit model.'],
]

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="A professional framework rooted in understanding rather than promotion"
        text="Liuli Society presents its methodology in a nonprofit-friendly, institutionally clear format that is easy for academic, donor, and community audiences to understand."
        image={approachImg}
        imageAlt="Approach visual"
      />
      <section className="section">
        <Container>
          <div className="grid-5">
            {steps.map(([title, text]) => (
              <Card key={title}>
                <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
