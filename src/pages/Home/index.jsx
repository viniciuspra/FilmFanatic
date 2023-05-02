import { Container, Content, NewFilm } from "./styles";
import { FilmCard } from "../../Components/FilmCard";
import { Header } from "../../Components/Header";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Meus filmes</h1>

          <NewFilm to="/New">
            <FiPlus />
            Adicionar filme
          </NewFilm>
        </div>

        <FilmCard
          data={{
            title: "Interestellar",
            description:
              'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. ',
            tags: [
              { id: "1", name: "Drama" },
              { id: "2", name: "Ação" },
              { id: "3", name: "Família" }
            ],
            rating: 4,
          }}
        />
      </Content>
    </Container>
  )
}