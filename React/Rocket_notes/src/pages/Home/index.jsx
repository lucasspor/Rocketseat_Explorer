import { GoPlus } from "react-icons/go"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js"
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export default function Home() {
  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActivite /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node" /></li>
      </Menu>
      <Search>

      </Search>
      <Content>
      </Content>
      <NewNote>
        <GoPlus />Criar nota
      </NewNote>
    </Container>
  )
}