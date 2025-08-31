import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Textarea } from "../../components/Textarea"
import { Noteitem } from "../../components/Noteitem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Container, Form } from "./style"

import { Link } from "react-router-dom"
import { useState } from "react"

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }


  return (
    <Container>
      <Header />
      <main>
        <Form >
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links utéis">
            {
              links.map((link, index) => (
                <Noteitem
                  key={String(index)}
                  value={link}
                  onClick={() => setLinks((prevLinks) => prevLinks.filter((_, i) => i !== index))}

                />
              ))
            }
            <Noteitem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <Noteitem value="React" />
              <Noteitem placeholder="Novo link" isNew />
            </div>
          </Section>
          <Button title="Salvar" type="submit" />
        </Form>
      </main>
    </Container>
  )
}