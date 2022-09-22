import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { CreateMovieTag } from "../../components/CreateMovieTag";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";

import { api } from "../../../../api_rocketmovies/src/services/api";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function backToPage() {
    navigate("/");
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite o titulo do filme");
    }

    if (!rating) {
      return alert("Digite uma nota para o filme");
    } else if (rating == 0) {
      return alert("Digite uma nota entre 1 e 5 para cadastrar o filme!");
    } else if (rating > 5) {
      return alert("Digite uma nota entre 1 e 5 para cadastrar o filme!");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio"
      );
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });
    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <div>
              <FiArrowLeft />
              <Link to="/">Voltar</Link>
            </div>
            <h1>Novo Filme</h1>
          </header>

          <div className="titleInput">
            <Input
              placeholder="Título"
              type="text"
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              placeholder="Sua nota (de 1 a 5)"
              type="text"
              onChange={(event) => setRating(event.target.value)}
            />
          </div>
          <textarea
            placeholder="Observações"
            onChange={(event) => setDescription(event.target.value)}
          />
          <h2>Marcadores</h2>
          <div className="tagSpace">
            {tags.map((tag, index) => (
              <CreateMovieTag
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}
            <CreateMovieTag
              isNew
              placeholder="Novo Marcador"
              onChange={(event) => setNewTag(event.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div>
            <Button title="Cancelar" onClick={backToPage} />
            <Button title="Salvar filme" onClick={handleNewMovieNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
