import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Rating } from "../../components/Rating"
import { Container, Form, Author, Spacer } from "./styles"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import ProfileNoImage from '../../assets/profile-no-image.png'
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hook/auth"
import { Button } from "../../components/Button"
import { toast } from "react-toastify"


export function Details() {
  const params = useParams()
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ProfileNoImage

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [])

  async function handleDeleteNote(e) {
    e.preventDefault()
    const confirm = window.confirm("Deseja deletar esta nota?")

    if (confirm) {
      await api.delete(`movie/${params.id}`)
      navigate(-1)
      toast.success("sua nota foi deletada")
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={handleDeleteNote}>
          <ButtonText onClick={handleBack} title="Voltar" icon={FiArrowLeft} isActive />
          {data && (
            <>
              <Spacer>
                <section>
                  <div className="title"><h1>{data.title}</h1><Rating grade={data.rating} isBigSize /></div>
                  <Author>
                    <div><img src={avatarUrl} alt="imagem do usuário" /><p>{user.name}</p></div>
                    <div> <FiClock /><p>{format(new Date(data.created_at), "dd/MM/yy 'às' HH:mm", { locale: ptBR })}</p></div>
                  </Author>
                  {
                    data.tags && <div className="tags">
                        
                     {data.tags.map((tag) => {
                        return (
                          <Tag key={tag.id} title={tag.name} />
                        )
                      })
                      }
                    </div>
                  }
                </section>

              </Spacer>
              <p>
                {data.description}

              </p></>)}
          <Button title="Excluir filme" isActive isBig type="submit" />
        </Form>
      </main>
    </Container>
  )
}