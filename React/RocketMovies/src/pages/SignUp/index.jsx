import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Container, Form, Background } from "./styles"
import { useState } from "react"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp(event) {
    event.preventDefault()
    if (!name || !email || !password) {
      return toast.error("Preencha todos os dados")
    }
    api.post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar"); 
        }
      });


  }
  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <div className="form-content">
          <div className="input-content">
            <Input icon={FiUser} placeholder="Nome" onChange={e => setName(e.target.value)} />
            <Input icon={FiMail} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)} />
          </div>
          <Button type="submit" title="Entrar" />
        </div>
        <ButtonText title="Voltar para o login" icon={FiArrowLeft} isActive />
      </Form>
      <Background />
    </Container>
  )
}