import { useState } from 'react'

import { Input } from '../../components/input'
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { api } from "../../services/api"

import { Container, Form, Background } from "./styles.js"
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignup(event) {
    event.preventDefault()
    if (!name || !email || !password) {
      return toast.error("Preencha todos os dados")
    }

   api.post("/users", { name, email, password })
    .then(() => {
      toast.success("Usuário cadastrado com sucesso");
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        toast.error(error.response.data.message);
       
      } else {
        toast.success("Não foi possível cadastrar");
      }
    })
  }

  return (
    <Container>
      <Background />
      <Form onSubmit={handleSignup}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
        <Input icon={FiMail} type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <Input icon={FiLock} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />

        <Button title="Cadastrar" type="submit" />

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>

    </Container>
  )

}