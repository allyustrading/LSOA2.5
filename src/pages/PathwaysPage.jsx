import pathwaysImg from '../assets/pathways-atlas.svg'
import { PageHero, Container, Card } from '../components/Layout'

const items = [
  ['Comfort & Circulation Support', 'Supporting everyday physical comfort, ease of movement, and a greater sense of balance through gentle wellness approaches.'],
  ['Daily Natural Skin Wellness', 'Encouraging daily practices that support balanced, healthy, and well-cared-for skin through natural care principles.'],
  ['Special Skin Care Support', 'Exploring supportive pathways for individuals with more sensitive, specialized, or closely monitored skin needs.'],
  ['Light Balance & Clean Living', 'Promoting habits and environments that help people feel clearer, lighter, and more grounded in daily life.'],
  ['Calm & Rest Support', 'Creating supportive routines for stillness, relaxation, and more restorative daily rhythms.'],
  ['Emotional Ease & Mood Balance', 'Supporting emotional comfort, steadiness, and a more balanced sense of wellbeing in everyday life.'],
  ['Better Living Rituals', 'Encouraging intentional daily rituals that support rhythm, wellbeing, and quality of life.'],
  ['Focus & Clarity Support', 'Supporting clearer attention, thoughtful engagement, and mental freshness through better daily patterns.'],
  ['Space Purification & Atmosphere', 'Exploring how supportive environments and thoughtful atmosphere design can improve how people live and work.'],
]

export default function PathwaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Pathways"
        title="Nine wellness pathways organized for clarity, accessibility, and future development"
        text="The Liuli framework is presented as a set of pathways rather than product categories, making it more suitable for education, nonprofit communication, and research-oriented exploration."
        image={pathwaysImg}
        imageAlt="Pathways visual"
      />
      <section className="section">
        <Container>
          <div className="grid-3">
            {items.map(([title, text], index) => (
              <Card key={title}>
                <div className="tag">Pathway {index + 1}</div>
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
