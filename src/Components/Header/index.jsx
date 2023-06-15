import { Container, Profile, Search} from "./styles";
import { FiSearch } from "react-icons/fi"
import { Input } from "../Input";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth() 

  return (
    <Container>
      <h1>FilmFanatic</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título" type="text" icon={FiSearch} />
      </Search>

      <Profile>
        <span>
          Vinicius Cascaes <br /> <button onClick={signOut}>Sair</button>
        </span>

        <Link to="/Profile"><img src="https://github.com/viniciuspra.png" alt="Foto do usuário" /></Link>
      </Profile>
    </Container>
  )
} 