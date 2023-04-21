import { Container, Profile, Search} from "./styles";
import { FiSearch } from "react-icons/fi"
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>FilmFanatic</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Profile>
        <span>
          Vinicius Cascaes <br /> <a href="/">Sair</a>
        </span>

        <img src="https://github.com/viniciuspra.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
} 