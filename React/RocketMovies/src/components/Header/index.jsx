import { Container, Profile } from "./styles"
import { Input } from "../Input"
import { Link } from "react-router-dom"

export function Header(){
  return (
    <Container >
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
        <h1>Lucas Silva Porto</h1>
        <Link to="/">sair</Link>
        </div>
        <Link to="/profile"><img src="https://github.com/lucasspor.png" alt="Profile image"/></Link>
      </Profile>
    </Container>
  )
}