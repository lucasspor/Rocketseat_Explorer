import { useState } from "react";

import { Container, Form, Avatar } from "./styles";

import { Input } from '../../components/input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProfileNoImage from '../../assets/profile-no-image.png'

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


export function Profile() {
  const navigate = useNavigate()
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ProfileNoImage
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate(event) {
    event.preventDefault()
    const updated = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }

    const userUpdated = Object.assign( user, updated)

    try {
      await updateProfile({ user: userUpdated, avatarFile })
      navigate(-1)
    } catch (error) {

    }
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    if (!file) {
      return
    }

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack} type="button">
          <FiArrowLeft />
        </button>
      </header>
      <Form onSubmit={handleUpdate}>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)} />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)} />

        <Button title="Salvar" type="submit" />
      </Form>
    </Container>
  )
}