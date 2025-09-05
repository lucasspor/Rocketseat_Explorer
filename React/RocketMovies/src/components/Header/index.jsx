import { Container, Profile } from "./styles"
import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../hook/auth";
import { api } from "../../services/api";
import ProfileNoImage from '../../assets/profile-no-image.png'

export function Header({search, setSearch}) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ProfileNoImage

  function handleLogOut() {
    signOut()
    navigate("/")
  }

  return (
    <Container >
      <Link to="/"><h1>RocketMovies</h1></Link>
      <Input placeholder="Pesquisar pelo título"
        value={search}
        onChange={e => setSearch(e.target.value)} />
      <Profile>
        <div>
          <h1>Lucas Silva Porto</h1>
          <button onClick={handleLogOut}>sair</button>
        </div>
        <Link to="/profile"><img src={avatarUrl} alt="Profile image" /></Link>
      </Profile>
    </Container>
  )
}