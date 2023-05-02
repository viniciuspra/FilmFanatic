import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton() {
  return (
    <Container to="/">
      <FiArrowLeft /> Voltar
    </Container>
  )
}