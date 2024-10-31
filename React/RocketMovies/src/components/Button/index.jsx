import { Container } from "./styles"

export function Button({ icon: Icon, title, loading = false, isActive = false, ...rest }) {
  return (
    <Container $isactive={isActive} disabled={loading} {...rest}>
      {Icon && <Icon size={20} />}
      {loading ? "Carregando" : title}
    </Container>
  )
}