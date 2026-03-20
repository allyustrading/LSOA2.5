import { Container, Card } from '../components/Layout'

export default function NotFoundPage() {
  return (
    <section className="section">
      <Container>
        <Card className="center">
          <h3>Page not found</h3>
          <p>Please use the navigation to continue exploring the website.</p>
          <a href="#/home" className="button button-dark" style={{ marginTop: 12 }}>Back to home</a>
        </Card>
      </Container>
    </section>
  )
}
