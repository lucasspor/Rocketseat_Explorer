import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js"
import { Header } from '../../components/Header'

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

      </Menu>
      <NewNote>

      </NewNote>
      <Search>

      </Search>

      <Content>
      </Content>
    </Container>
  )
}