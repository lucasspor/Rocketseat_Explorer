import { Input } from '../../components/input'
import { FiMail, FiLock } from "react-icons/fi"
import { Container, Form, Background } from "./styles.js"
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Signing() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()
  
  function handleSignIng(){
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
        <Input icon={FiLock} placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignIng} />

        <Link to="/register">
          Criar Conta
        </Link>
      </Form>
      <Background />
    </Container>
  )

}