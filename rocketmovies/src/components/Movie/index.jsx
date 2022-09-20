import { BsStarFill } from "react-icons/bs";
import { Container } from "./styles";
import { Tag } from "../Tag";

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        <BsStarFill className={data.rating >= 1 ? "rating" : ""} />
        <BsStarFill className={data.rating >= 2 ? "rating" : ""} />
        <BsStarFill className={data.rating >= 3 ? "rating" : ""} />
        <BsStarFill className={data.rating >= 4 ? "rating" : ""} />
        <BsStarFill className={data.rating >= 5 ? "rating" : ""} />
      </div>
      <p>{`${data.description.substring(0, 385)}...`}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
