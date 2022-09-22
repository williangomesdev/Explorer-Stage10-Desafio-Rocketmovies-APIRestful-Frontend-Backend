import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { FiArrowLeft } from "react-icons/fi";
import { BsStarFill, BsStar, BsClock } from "react-icons/bs";
import { Container } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../../api_rocketmovies/src/services/api";
import { useAuth } from "../../hooks/auth";

export function MoviePreview() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  console.log(data);

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function backToPage() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`notes/${params.id}`);
      setData(response.data);
    }

    fetchMovieNotes();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <div onClick={backToPage}>
            <FiArrowLeft />
            <p>Voltar</p>
          </div>
          <div>
            <h1>{data.title}</h1>
            <div>
              <BsStarFill className={data.rating >= 1 ? "rating" : ""} />
              <BsStarFill className={data.rating >= 2 ? "rating" : ""} />
              <BsStarFill className={data.rating >= 3 ? "rating" : ""} />
              <BsStarFill className={data.rating >= 4 ? "rating" : ""} />
              <BsStarFill className={data.rating >= 5 ? "rating" : ""} />
            </div>
          </div>
          <div>
            <img src={avatarUrl} alt="foto do perfil" />
            <span>{user.name}</span>
            <BsClock />
            <span>
              {`${data.updated_at.split(/T|\s/)[0].split("-")[2]}/
              ${data.updated_at.split(/T|\s/)[0].split("-")[1]}/
              ${data.updated_at.split(/T|\s/)[0].split("-")[1]} às 
              ${data.updated_at.split(/T|\s/)[1].split(":")[0] - 3}:
              ${data.updated_at.split(/T|\s/)[1].split(":")[1]}`}
            </span>
          </div>

          {data.tagMovie && (
            <div>
              {data.tagMovie.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <p>{data.description}</p>
        </main>
      )}
    </Container>
  );
}
