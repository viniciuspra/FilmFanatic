import { Container } from "./styles"
import { Header } from "../../Components/Header"
import Star from "../../Components/Star"

export function Preview() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Interestellar</h1> <Star />
      </main>
    </Container>
  )
}
