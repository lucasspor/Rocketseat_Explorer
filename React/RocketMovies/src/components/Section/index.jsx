import { FiPlus, FiX } from "react-icons/fi";
import { GenreTag } from "../GenreTag";
import { Container } from "./styles";

export function Section({title, children}) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </Container>
  );
}
