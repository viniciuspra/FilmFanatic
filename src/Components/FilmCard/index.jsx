import { Container } from "./styles";
import { Tag } from "../Tag";
import Star from "../Star";

export function FilmCard({ data, ...rest}) {
  const tags = data.tags || [];
  const rating = data.rating || 0;

  return (
    <Container to="/Preview/1" {...rest}>
      <h1>{data.title}</h1>
      <Star value={rating} />
      <p>{data.description}</p>
      <div>
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </div>
    </Container>
  )
}
