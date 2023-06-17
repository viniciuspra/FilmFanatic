import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { Container, Form, Section } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../Components/Header";
import { TagItem } from "../../Components/TagItem";
import { TextArea } from "../../Components/TextArea";
import { BackButton } from "../../Components/BackButton";
import { MaskedInput } from "../../Components/MaskedInput";

export function New() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

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
              {
                tags.map(tag => (
                  <TagItem
                    key={uuidv4()}
                    value={tag}
                    onClick={() => {handleRemoveTag(tag)}}
                  />
                ))
              }

              <TagItem
                isNew
                placeholder="Novo marcador" 
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
          </div>

          <div className="buttons">
            <Button title="Salvar alterações" isNew />
          </div>
        </Form>
      </main>
    </Container>
  )
}