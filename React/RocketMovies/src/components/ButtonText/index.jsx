import { Container } from "./styles"

export function ButtonText({icon: Icon,title, isActive = false, ...rest  }){
  return(
    <Container $isactive={isActive} {...rest}>
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}