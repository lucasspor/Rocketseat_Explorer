import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { Container, Form, Spacer } from "./styles"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"


export function NewMovie() {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={e => e.preventDefault()}>
          <header>
            <ButtonText onClick={handleBack} title="Voltar" icon={FiArrowLeft} isActive />
            <h1>Novo filme</h1>
          </header>
          <Spacer>
            <Input type="text" placeholder="Título" />
            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </Spacer>
          <Textarea placeholder="Observações" />
          <Section title="Marcadores" genre={[{id: 1, name: "comprar"}]}/>
          <Spacer>
            <Button title="Excluir filme" isActive isBig/>
            <Button title="Salvar alterações" isBig/>
          </Spacer>
        </Form>
      </main>
    </Container>
  )
}