import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Container, Form } from "./styles"
import { FiArrowLeft } from "react-icons/fi"

export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonText to="/" title="Voltar" icon={FiArrowLeft} isActive />
          <h1>Novo filme</h1>
        </Form>
      </main>
    </Container>
  )
}