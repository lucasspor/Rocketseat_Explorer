import { FiPlus } from "react-icons/fi"
//style.js componentes
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js"
//Componentes
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/input"
import { Section } from "../../components/Section"

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
        <Input placeholder="Pesquisar pelo titulo"/>
      </Search>
      <Content>
        <Section title="Minhas notas">
          
        </Section>
      </Content>
      <NewNote>
        <FiPlus />Criar nota
      </NewNote>
    </Container>
  )
}