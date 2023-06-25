import { useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { Container, Content, NewFilm } from "./styles";
import { FilmCard } from "../../Components/FilmCard";
import { Header } from "../../Components/Header";
import { FiPlus } from "react-icons/fi";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
   }, [search])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />

      <Content>
        <div>
          <h1>Meus filmes</h1>

          <NewFilm to="/New">
            <FiPlus />
            Adicionar filme
          </NewFilm>
        </div>
        {
          notes.map(note => (
            <FilmCard
              key={uuidv4()}
              data={note}
            />
          ))
        }
        
      </Content>
    </Container>
  )
}