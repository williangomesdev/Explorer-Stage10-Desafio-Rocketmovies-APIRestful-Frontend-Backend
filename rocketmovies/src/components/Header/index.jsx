import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
import { api } from "../../../../api_rocketmovies/src/services/api";
import avatarPlaceholder from "../../assets/avatar_background.svg";

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h1>Rocketmovies</h1>
      <Input placeholder="Pesquisar por título" />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <a onClick={signOut} href="#">
            sair
          </a>
        </div>
        <Link to="/profile" className="link">
          <img src={avatarUrl} alt="foto do perfil" />
        </Link>
      </Profile>
    </Container>
  );
}
