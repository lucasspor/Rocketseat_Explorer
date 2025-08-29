import { useState } from 'react'

import { Input } from '../../components/input'
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { api } from "../../services/api"

import { Container, Form, Background } from "./styles.js"
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'

export function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignup() {
    if (!name || !email || !password) {
      return alert("Preencha todos os dados")
    }

   api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso");
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
       
      } else {
        alert("Não foi possível cadastrar");
      }
    })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
        <Input icon={FiMail} type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <Input icon={FiLock} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />

        <Button title="Cadastrar" onClick={handleSignup} />

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>

    </Container>
  )

}