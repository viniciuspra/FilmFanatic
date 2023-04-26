import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input";

export function SingUp() {
  return (
    <Container>
      <Form>
        <h1>FilmFanatic</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="/"> <FiArrowLeft/> Voltar para o login</a>
      </Form>
      <Background />
    </Container>
  )
}