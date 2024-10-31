import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Container, Form, Background } from "./styles"

export function SignIng() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <div className="form-content">
          <div className="input-content">
            <Input icon={FiUser} placeholder="Nome" />
            <Input icon={FiMail} placeholder="Email" />
            <Input type="password" icon={FiLock} placeholder="Senha" />
          </div>
          <Button to="/home" title="Entrar" />
        </div>
        <ButtonText to="/" title="Voltar para o login" icon={FiArrowLeft} isActive/>
      </Form>
      <Background/>
    </Container>
  )
}