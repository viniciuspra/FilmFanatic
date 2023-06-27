import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { v4 as uuidv4 } from 'uuid';

import { Container, Content, InfoBox } from "./styles"
import { BackButton } from "../../Components/BackButton"
import { FiClock } from "react-icons/fi"
import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"
import { Tag } from "../../Components/Tag"
import Star from "../../Components/Star"

import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Preview() {
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja excluir essa nota?')

    if (confirm) {
      const response = await api.delete(`/notes/${params.id}`)
      setData(response.data)
      
      navigate(-1)
    }
  }

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
          <BackButton onClick={handleBack}/>
          <InfoBox>
            <div>
              <h1>
                {data.title}
              </h1>

              <Star value={data.rating} />
            </div>

            <span>
              <img
                src={user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder}
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

          <Button
            title="Excluir filme" 
            onClick={handleRemove}
          />
        </Content>
      }
    </Container>
  )
}
