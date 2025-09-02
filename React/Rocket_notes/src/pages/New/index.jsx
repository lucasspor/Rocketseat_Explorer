import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Textarea } from "../../components/Textarea"
import { Noteitem } from "../../components/Noteitem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Container, Form } from "./style"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { ButtonText } from "../../components/ButtonText"

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLink() {
    if (!newLink) {
      toast.error("Preencha o link antes de adicionar");
      return;
    }
      const existLink = links.some(link => link.toLowerCase() === newLink.toLowerCase())
    if (existLink) {
      toast.error("Esse link já foi adicionada");
      return
    }
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevLinks => prevLinks.filter((link => link !== deleted)))
  }

  function handleAddTag() {
    if (!newTag) {
      toast.error("Preencha o marcador antes de adicionar");
      return;
    }
    const existTag = tags.some(tag => tag.toLowerCase() === newTag.toLowerCase())
    if (existTag) {
      toast.error("Essa tag já foi adicionada")
      return
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevTags => prevTags.filter((tag => tag !== deleted)))
  }

  async function handleNewNote() {

    if(newTag){
      return toast.error("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar")
    }

    if(newLink){
      return toast.error("Você deixou um link no campo para adicionar, mas não clicou em adicionar")
    }

    if (!title) {
      toast.error("Preencha o titulo antes de adicionar");
      return;
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    toast.success("Nota criada com sucesso")
    navigate("/")
  }


  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={(e) => {
          e.preventDefault()
          handleNewNote()
        }}>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack}/> 
          </header>
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
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
              />
            </div>
          </Section>
          <Button title="Salvar" type="submit" />
        </Form>
      </main>
    </Container>
  )
}