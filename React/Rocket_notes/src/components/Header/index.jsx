import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import ProfileNoImage from '../../assets/profile-no-image.png'
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: ProfileNoImage

  function handleLogOut(){
    signOut()
    navigate("/")
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleLogOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}