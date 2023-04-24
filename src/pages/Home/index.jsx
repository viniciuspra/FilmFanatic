import { Container, Content, NewFilm } from "./styles";
import { Header } from "../../Components/Header";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Meus filmes</h1>

          <NewFilm>
            <FiPlus />
            Adicionar filme
          </NewFilm>
        </div>

        

      </Content>
    </Container>
  )
}