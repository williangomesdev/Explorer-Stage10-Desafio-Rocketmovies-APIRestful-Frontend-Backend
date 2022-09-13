import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <h1>Rocketmovies</h1>
      <Input placeholder="Pesquisar por título" />
      <Profile>
        <div>
          <strong>Willian Amaro Gomes</strong>
          <a onClick={signOut} href="#">
            sair
          </a>
        </div>
        <img
          src="https://github.com/williangomesdev.png"
          alt="foto do perfil"
        />
      </Profile>
    </Container>
  );
}
