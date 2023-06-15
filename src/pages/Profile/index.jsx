import { useState } from "react";

import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { BackButton } from "../../Components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

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
        <Input
         placeholder="Nome"
         type="text"
         icon={FiUser}
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
        <Input
         placeholder="E-mail"
         type="text"
         icon={FiMail}
         value={email}
         onChange={(e) => setEmail(e.target.value)} 
        />
        <Input
         placeholder="Senha atual"
         type="password"
         icon={FiLock}
         onChange={(e) => setOldPassword(e.target.value)} 
        />
        <Input
         placeholder="Nova senha"
         type="password"
         icon={FiLock}
         onChange={(e) => setNewPassword(e.target.value)} 
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}