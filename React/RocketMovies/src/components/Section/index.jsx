import { FiPlus, FiX } from "react-icons/fi";
import { GenreTag } from "../GenreTag";
import { Container } from "./styles";

export function Section({ title, genre = [] }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        {genre.length > 0
          ? genre.map((genre) => <GenreTag key={genre.id} name={genre.name} icon={FiX} />)
          : <GenreTag name="Novo Marcador" />}
          <GenreTag name="Novo Marcador" isNew icon={FiPlus} />
      </div>
    </Container>
  );
}
