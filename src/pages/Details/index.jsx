import { Container } from "./styles";
import { Header } from "../../Components/Header"
import { Rating } from "../../Components/Rating";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Interestellar</h1> <Rating />
      </main>
    </Container>
  )
}