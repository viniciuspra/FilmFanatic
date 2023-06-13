import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input";
import { Link } from "react-router-dom";

export function SingIn() {
  const data = useAuth()
  
  return (
    <Container>
      <Form>
        <h1>FilmFanatic</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>

        <Button title="Entrar"/>

        <Link to="/Register">
          Criar Conta
        </Link>
      </Form>
      <Background/>
    </Container>
  )
}