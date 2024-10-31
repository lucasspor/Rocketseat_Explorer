import { Container } from "./styles"

export function GenreTag({ isNew = false, icon: Icon, name, ...rest }) {
  return (
    <Container as={isNew ? "button" : "span"} $isnew={isNew} {...rest}>
      <p>{name ? name : "Novo Marcador"}</p>
      {isNew ?
        <Icon /> :
        <button><Icon /></button>
      }
    </Container>
  );
}
