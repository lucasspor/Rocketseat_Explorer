import { Input } from '../../components/input'
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Container, Form, Background } from "./styles.js"
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Signup() {
  return (
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome"/>
        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Senha"/>

        <Button title="Cadastrar"/>

        <ButtonText title="Voltar para o login" isActive/>
      </Form>
      
    </Container>
  )

}