import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Textarea } from "../../components/Textarea"
import { Noteitem } from "../../components/Noteitem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Container, Form } from "./style"

import { Link } from "react-router-dom"

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links utéis">
            <Noteitem value="https://www.rocketseat.com.br/" />
            <Noteitem placeholder="Novo link" isNew/>
          </Section>
          <Section title="Marcadores">
            <div className="tags">
            <Noteitem value="React" />
            <Noteitem placeholder="Novo link" isNew/>
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}