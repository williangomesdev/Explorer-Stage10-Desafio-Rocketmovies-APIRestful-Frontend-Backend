import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
import { api } from "../../../../api_rocketmovies/src/services/api";
import avatarPlaceholder from "../../assets/avatar_background.svg";
import { useState, useEffect } from "react";

export function Header() {
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <h1>Rocketmovies</h1>
      <Input
        placeholder="Pesquisar por título"
        onChange={(event) => setSearch(event.target.value)}
      />
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
