import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { BackButton } from "../../Components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


export function Profile() {
  return (
    <Container>
      <header>
          <BackButton />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/viniciuspra.png" alt="Foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}