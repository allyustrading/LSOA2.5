import supportImg from '../assets/support-foundation.svg'
import { PageHero, Container, Card } from '../components/Layout'

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="A more standard support page that builds credibility and prepares for future growth"
        text="Even when donations are not the immediate priority, this page helps establish nonprofit trust and future readiness for partnership, collaboration, and contribution."
        image={supportImg}
        imageAlt="Support page visual"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Why support Liuli Society</h3>
              <p>Support helps expand educational resources, responsible innovation, public-facing community work, and mission-centered organizational growth.</p>
            </Card>
            <Card>
              <h3>Partnership opportunities</h3>
              <p>Liuli Society welcomes conversations with institutions, community organizations, and individuals who value thoughtful, community-centered wellbeing work.</p>
            </Card>
            <Card>
              <h3>Educational collaboration</h3>
              <p>Opportunities may include workshops, learning resources, pilot programs, research discussion, and community outreach collaboration.</p>
            </Card>
            <Card className="card-dark">
              <h3>Tax-deductible giving</h3>
              <p>Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
