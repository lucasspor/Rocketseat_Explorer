import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Container, Form, Background } from "./styles"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <div className="form-content">
          <div className="input-content">
            <Input icon={FiMail} placeholder="Email" />
            <Input icon={FiLock} placeholder="Senha" />
          </div>
          <Button title="Entrar" />
        </div>
        <ButtonText to="/register" title="Criar conta" isActive/>
      </Form>
      <Background/>
    </Container>
  )
}