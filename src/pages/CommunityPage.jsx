import communityImg from '../assets/community-forum.svg'
import { PageHero, Container, Card } from '../components/Layout'

const items = [
  'Educational workshops and learning resources',
  'Small-group experiences and discussion circles',
  'Volunteer and mission-aligned participation',
  'Community-facing pilot initiatives',
  'Long-term support vision grounded in trust and care',
]

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Making wellness education more accessible and more supportive for real communities"
        text="Liuli Society exists not only to explore ideas, but to make them more understandable, approachable, and useful through public-facing education and thoughtful engagement."
        image={communityImg}
        imageAlt="Community page visual"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Community focus</h3>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card className="card-dark">
              <h3>Long-term community vision</h3>
              <p>
                Our long-term vision is to create a nonprofit ecosystem where education,
                supportive relationships, and responsible innovation strengthen one another
                and create real community value.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
