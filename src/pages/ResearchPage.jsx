import researchImg from '../assets/research-studio.svg'
import { PageHero, Container, Card } from '../components/Layout'

const sections = [
  ['Why UNH BIC', 'The UNH BIC context supports a more credible and innovation-oriented environment for nonprofit exploration and future collaboration.'],
  ['Research-informed innovation', 'Liuli Society is developing a model that values learning, reflection, documentation, and responsible refinement.'],
  ['Exploratory development areas', 'Potential areas include wellness education tools, community learning models, and exploratory design concepts informed by daily living needs.'],
  ['Community pilot possibilities', 'Pilot programs may support public learning, small-group engagement, and better understanding of supportive wellness practices.'],
  ['Future collaboration', 'The platform is designed to welcome mission-aligned collaboration with universities, researchers, educators, and nonprofit partners.'],
]

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="A calmer, more institutional research page with a credible nonprofit tone"
        text="This page presents seriousness, innovation, and nonprofit legitimacy while remaining accessible to non-technical audiences."
        image={researchImg}
        imageAlt="Research page visual"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            {sections.map(([title, text]) => (
              <Card key={title}>
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
