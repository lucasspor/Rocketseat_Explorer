import { FiPlus } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js"

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { api } from "../../services/api.js"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export function Home() {
  const [tags, setTags] = useState([])
  const [tagSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if(tagName == "all"){
      return setTagsSelected([])
    }

    const alreadySelected = tagSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }

  }

  function handleDetails(id){
      navigate(`/details/${id}`)
  }


  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get("/tags")
        setTags(response.data)
      } catch (error) {
        toast.error("Erro ao buscar tags:", error)
      }
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagSelected, search])

  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText
          title="Todos"
          isActive={tagSelected.length == 0}
          onClick={() => handleTagSelected("all")}
        /></li>
        {tags && tags.map((tag) =>
        (
          <li key={tag.id}><ButtonText
            title={tag.name}
            onClick={() => handleTagSelected(tag.name)}
            isActive={tagSelected.includes(tag.name)} /></li>
        ))
        }
      </Menu>
      <Search>
        <Input
          placeholder="Pesquisar pelo titulo"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note} 
                onClick={() => handleDetails(note.id)}/>
            ))
          }

        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />Criar nota
      </NewNote>
    </Container>
  )
}