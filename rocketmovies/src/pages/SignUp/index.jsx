import { useState } from "react";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

import { api } from "../../../../api_rocketmovies/src/services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos, para concluir seu cadastro!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível fazer o cadastro, tente novamente.");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assiste</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <div className="buttonText">
          <FiArrowLeft />
          <Link to="/">Voltar para login</Link>
        </div>
      </Form>
      <Background />
    </Container>
  );
}
