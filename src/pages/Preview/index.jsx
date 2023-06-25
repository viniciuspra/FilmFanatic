import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { v4 as uuidv4 } from 'uuid';

import { Container, Content, InfoBox } from "./styles"
import { BackButton } from "../../Components/BackButton"
import { FiClock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Header } from "../../Components/Header"
import { Tag } from "../../Components/Tag"
import Star from "../../Components/Star"

import { api } from "../../services/api"


export function Preview() {
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <Content>
          <BackButton />
          <InfoBox>
            <div>
              <h1>
                {data.title}
              </h1>

              <Star value={data.rating} />
            </div>

            <span>
              <img
                src={`${api.defaults.baseURL}/files/${user.avatar}`}
                alt={user.name}
              />
              Por {user.name}
              <FiClock /> {data.created_at}
            </span>
          </InfoBox>

            {
              data.tags &&
              <div> 
                {
                  data.tags.map(tag => (
                    <Tag
                      key={uuidv4()}
                      title={tag.name} 
                    />
                  ))
                }
              </div>
            }

          <p>
            {data.description}
          </p>

          <Button title="Excluir filme" />
        </Content>
      }
    </Container>
  )
}
