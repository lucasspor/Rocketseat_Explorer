import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Textarea } from "../../components/Textarea"
import { Noteitem } from "../../components/Noteitem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Container, Form } from "./style"

import { Link } from "react-router-dom"
import { useState } from "react"

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddLink() {
    if (!newLink) {
      toast.error("Preencha o link antes de adicionar");
      return;
    }
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevLinks => prevLinks.filter((link => link !== deleted)))
  }

  function handleAddTag() {
    if (!newTag) {
      toast.error("Preencha o link antes de adicionar");
      return;
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevTags => prevTags.filter((tag => tag !== deleted)))
  }


  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={(e) => e.preventDefault()}>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links utéis">
            {links.map((link, index) => {
              return (
                <Noteitem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              );
            })}

            <Noteitem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleAddLink()
                }
              }}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => {
                  return (
                    <Noteitem
                      key={index}
                      value={tag}
                       onClick={() => handleRemoveTag(tag)}
                    />
                  )
                })
              }
              <Noteitem
                isNew
                placeholder="Nova Marcação"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleAddTag()
                  }
                }}
              />
            </div>
          </Section>
          <Button title="Salvar" type="submit" />
        </Form>
      </main>
    </Container>
  )
}