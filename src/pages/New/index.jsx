import { Container, Form, Section } from "./styles"; 
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { TagItem } from "../../Components/TagItem";
import { TextArea } from "../../Components/TextArea";
import { BackButton } from "../../Components/BackButton";
import { MaskedInput } from "../../Components/MaskedInput";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <BackButton />
          <h1>Novo filme</h1>
        </header>
        <Form>
          <Section>
            <Input placeholder="Título" type="text" />
            <MaskedInput placeholder="Sua nota (de 0 a 5)" />
            <TextArea placeholder="Descrição" />
          </Section>

          <h1>Marcadores</h1>

          <div className="Mark">
            <TagItem value="Família" />
            <TagItem isNew placeholder="Novo marcador" />
          </div>

          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" isNew />
          </div>
        </Form>
      </main>
    </Container>
  )
}