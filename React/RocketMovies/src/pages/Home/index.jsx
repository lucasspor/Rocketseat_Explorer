import { Container, Content, Form } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FiPlus } from "react-icons/fi"
import { Movie } from "../../components/Movie"
import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()
    
    function handleList(){
     return  navigate("/Details/3")
    }

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Meus filmes</h1>

            <Button to="/new" title="Adicionar filme" icon={FiPlus} />
          </header>
          <Content>
            <Movie onClick={handleList} rating={3.5}/>
          </Content>
        </Form>
      </main>
    </Container>
  )
}