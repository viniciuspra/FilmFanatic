import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import { Container, Form, Section } from "./styles";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { TagItem } from "../../Components/TagItem";
import { TextArea } from "../../Components/TextArea";
import { BackButton } from "../../Components/BackButton";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)
  

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Você precisa adicionar um titulo antes de salvar a nota!')
    }

    if (Number(rating) < 1 || Number(rating) > 5) {
      return alert("A nota do filme deve estar entre 1 e 5.")
    }

    if (newTag) {
      return alert('Você esqueceu de apertar o + para adicionar o marcador do filme!')
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags
    })

    alert('Filme adicionado com sucesso')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <header>
          <BackButton onClick={handleBack}/>
          <h1>Novo filme</h1>
        </header>
        <Form>
          <Section>
            <Input
              placeholder="Título"
              type="text"
              onChange={e => setTitle(e.target.value)} 
            />
            <Input
              placeholder="Sua nota (de 0 a 5)" 
              type="number"
              onChange={e => setRating(e.target.value)}
            />
            <TextArea
              placeholder="Descrição" 
              onChange={e => setDescription(e.target.value)}
            />
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
            <Button onClick={handleNewNote} title="Salvar alterações" isNew />
          </div>
        </Form>
      </main>
    </Container>
  )
}