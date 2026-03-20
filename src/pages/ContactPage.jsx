import contactImg from '../assets/contact-bridge.svg'
import { PageHero, Container, Card } from '../components/Layout'

const inquiryTypes = [
  'University or research collaboration',
  'Community partnership',
  'Educational inquiry',
  'Volunteer interest',
  'Mission-aligned partnership',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with Liuli Society"
        text="We welcome inquiries from researchers, educators, community organizations, volunteers, and mission-aligned supporters."
        image={contactImg}
        imageAlt="Contact page visual"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Inquiry areas</h3>
              <ul>
                {inquiryTypes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card>
              <h3>Contact form preview</h3>
              <p>This design-ready form can later be connected to email, a CRM, or a nonprofit form service.</p>
              <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
                <input placeholder="Your name" style={fieldStyle} />
                <input placeholder="Email address" style={fieldStyle} />
                <input placeholder="Subject" style={fieldStyle} />
                <textarea placeholder="How would you like to connect with Liuli Society?" style={{...fieldStyle, minHeight: 140, resize: 'vertical'}} />
                <button className="button button-dark" style={{ width: 'fit-content' }}>Send inquiry</button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

const fieldStyle = {
  border: '1px solid #cbd5e1',
  borderRadius: 16,
  padding: '14px 16px',
  fontSize: 16,
  outline: 'none',
  background: '#fff'
}
