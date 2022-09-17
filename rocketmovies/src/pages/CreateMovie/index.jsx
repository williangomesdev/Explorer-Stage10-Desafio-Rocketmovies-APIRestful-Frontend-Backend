import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CreateMovieTag } from "../../components/CreateMovieTag";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";

export function CreateMovie() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
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
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </div>
          <textarea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="tagSpace">
            {tags.map((tag, index) => (
              <CreateMovieTag
                key={String(index)}
                value={tag}
                onClick={() => {}}
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
            <Button title="Excluir filme" />
            <Button title="Salvar filme" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
