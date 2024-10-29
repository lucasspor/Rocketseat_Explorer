import { FiUser } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Container, Form } from "./styles"

export function SignIng(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <Input icon={FiUser} placeholder="Olá"/>
      </Form>
    </Container>
  )
}