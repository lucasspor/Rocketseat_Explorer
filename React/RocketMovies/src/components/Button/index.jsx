import { Container } from "./styles"

export function Button({ icon: Icon, title,isBig = false, loading = false, isActive = false, ...rest }) {
  return (
    <Container $isactive={isActive} $isbig={isBig} disabled={loading} {...rest} >
      {Icon && <Icon size={20} />}
      {loading ? "Carregando" : title}
    </Container>
  )
}