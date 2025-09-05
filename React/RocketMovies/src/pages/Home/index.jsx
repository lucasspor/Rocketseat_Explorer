import { Container, Content, Form } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FiPlus } from "react-icons/fi"
import { Movie } from "../../components/Movie"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    return navigate(`/details/${id}`)
  }

      async function fetchNotes() {
      try {
        const response = await api.get("/movie?title=");
        setNotes(response.data);
      } catch (error) {
        console.error("Erro ao carregar notas:", error.response?.data || error.message);
        setNotes([]);
      }
    }

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    if (!search) {
      fetchNotes();
      return
    };

    async function fetchSearchNotes() {
      try {
        const response = await api.get(`/movie?title=${encodeURIComponent(search)}`);
        setNotes(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error.response?.data || error.message);
      }
    }
    fetchSearchNotes();
  }, [search]);


  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Header search={search} setSearch={setSearch} />
      <main>
        <Form>
          <header>
            <h1>Meus filmes</h1>

            <Button onClick={() => navigate("/new")} title="Adicionar filme" icon={FiPlus} />
          </header>
          <Content>
            {
              notes.map((note) => {
                return (
                  <Movie
                    key={note.id}
                    data={note}
                    onClick={() => handleDetails(note.id)}
                  />)
              })
            }
          </Content>
        </Form>
      </main>
    </Container>
  )
}