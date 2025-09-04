import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Container, Form, Background } from "./styles"
import { useState } from "react"

import { useAuth } from "../../hook/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIng(event) {
    event.preventDefault()
    signIn({ email, password })
  }

  return (
    <Container>
      <Form onSubmit={handleSignIng}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <div className="form-content">
          <div className="input-content">
            <Input icon={FiMail} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
          </div>
          <Button  title="Entrar" />
        </div>
        <ButtonText to="/register" title="Criar conta" isActive />
      </Form>
      <Background />
    </Container>
  )
}