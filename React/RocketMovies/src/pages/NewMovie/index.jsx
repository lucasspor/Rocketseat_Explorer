import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { Container, Form, Spacer } from "./styles"
import { FiArrowLeft, FiPlus } from "react-icons/fi"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { GenreTag } from "../../components/GenreTag"
import { Section } from "../../components/Section"
import { toast } from "react-toastify"
import { api } from "../../services/api"


export function NewMovie() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    if (!newTag) {
      return toast.error("Preencha o marcador antes de adicionar");
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

  async function handleAddNote(event) {
    event.preventDefault()
    if (!title) {
      return toast.error("Adicione um titulo a nota")
    }

    if (rating == "") {
      return toast.error("Adicione um avaliação de 0 a 5 a nota")
    }

    if (newTag) {
      return toast.error("você preecheu a nova marcação, porém não adicionou")
    }

    if (tags.length === 0) {
      return toast.error("Adicione uma marcação de genero a nota")
    }

    await api.post("/movie", {
      title,
      description,
      tags,
      rating
    })

    toast.success("Nota criada com sucesso")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={handleAddNote}>
          <header>
            <ButtonText onClick={handleBack} title="Voltar" icon={FiArrowLeft} isActive />
            <h1>Novo filme</h1>
          </header>
          <Spacer>

            <Input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} />
            <Input type="number" placeholder="Sua nota (de 0 a 5)"
              value={rating}
              min={0}
              max={5}
              step={1}
              onChange={e => {
                let value = e.target.value
                if (value === "") {
                  setRating("")
                  return
                }
                if (value.length > 2) return

                const numberValue = Number(value)

                if (numberValue >= 0 && numberValue <= 5) {
                  setRating(numberValue)
                }
              }} />
          </Spacer>
          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

          <Section title="Marcadores">
            <GenreTag isNew
              placeholder="Nova Marcação"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
            {
              tags.map((tag, index) => {
                return (
                  <GenreTag
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                )
              })
            }
          </Section>
          <Spacer>
            {/* <Button title="Excluir filme" isActive isBig /> */}
            <Button title="Salvar alterações" isBig />
          </Spacer>
        </Form>
      </main>
    </Container>
  )
}