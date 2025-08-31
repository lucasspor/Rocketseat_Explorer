import { FiPlus } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js"

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { api } from "../../services/api.js"
import { useEffect, useState } from "react"

export function Home() {
  const [tags, setTags] = useState([])
  const [notes, setNotes] = useState([])



  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get("/tags")
        setTags(response.data)
      } catch (error) {
        toast.error("Erro ao buscar tags:", error)
      }
    }

    async function fetchNotes() {
      try {
        const response = await api.get("/notes")
        setNotes(response.data)
      } catch (error) {
        toast.error("Erro ao buscar notes:", error)
      }
    }

    fetchNotes()
    fetchTags()
  }, [])


  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        {tags && tags.map((tag) =>
        (
          <li key={tag.id}><ButtonText title={tag.name} $isactivite /></li>
        ))
        }
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo titulo" />
      </Search>
      <Content>
        <Section title="Minhas notas">
          {
            notes && notes.map((note) => (
              <Note data={{
                title: note.title, tags: [
                  { id: '1', name: 'express' },
                  { id: '2', name: 'nodejs' }
                ]
              }} />
            ))
          }
          <Note data={{
            title: 'Exemplo de Middleware', tags: [
              { id: '1', name: 'express' },
              { id: '2', name: 'nodejs' }
            ]
          }} />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />Criar nota
      </NewNote>
    </Container>
  )
}