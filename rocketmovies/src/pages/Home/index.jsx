import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { api } from "../../../../api_rocketmovies/src/services/api";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Container } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setMovieNotes(response.data);
    }
    fetchNotes();
  }, []);

  return (
    <Container>
      <Header onSearch={(event) => setSearch(event.target.value)} />
      <div className="mainTitle">
        <h1>Meus filmes</h1>
        <Link to="/new">
          <FiPlus />
          Adicionar filme
        </Link>
      </div>
      <div className="movieTags">
        {movieNotes.map((movie, index) => (
          <Movie key={String(index)} data={movie} />
        ))}
      </div>
    </Container>
  );
}
