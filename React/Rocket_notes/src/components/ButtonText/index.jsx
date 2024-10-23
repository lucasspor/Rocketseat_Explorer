import { Container } from "./styles";

export function ButtonText({ title, isActivite = false, ...rest }) {
  return (
    <Container
      type="button"
      isActivite={isActivite}
      {...rest}>
      {title}
    </Container>
  )

}