import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton({...rest}) {
  return (
    <Container {...rest}>
      <FiArrowLeft /> Voltar
    </Container>
  )
}