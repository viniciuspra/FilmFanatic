import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function SingUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        }else {
          alert("Não foi possível cadastar")
        }
      });

  }

  return (
    <Container>
      <Form>
        <h1>FilmFanatic</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          {" "}
          <FiArrowLeft /> Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}