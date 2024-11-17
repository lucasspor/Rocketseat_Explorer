import { Input } from '../../components/input'
import { FiMail, FiLock } from "react-icons/fi"
import { Container, Form, Background } from "./styles.js"
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom'

export function Signing() {

  const data = useAuth()
  console.log("My context => ", data)

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" />

        <Button title="Entrar" />

        <Link to="/register">
          Criar Conta
        </Link>
      </Form>
      <Background />
    </Container>
  )

}