import { Container, Profile, Search} from "./styles";
import { FiSearch } from "react-icons/fi"
import { Input } from "../Input";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth() 

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>FilmFanatic</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título" type="text" icon={FiSearch} />
      </Search>

      <Profile>
        <span>
          {user.name} <br /> <button onClick={signOut}>Sair</button>
        </span>

        <Link to="/Profile">
          <img
           src={avatarUrl}
           alt={user.name} 
          />
          </Link>
      </Profile>
    </Container>
  )
} 