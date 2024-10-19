import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/lucasspor.png" alt="profile image" />
        <div>
          <span>Bem-Vindo</span>
          <strong>Lucas Silva Porto</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}