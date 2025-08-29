import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"
import { toast } from "react-toastify"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketnote:user', JSON.stringify(user))
      localStorage.setItem('@rocketnote:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

    } catch (error) {
      if (error.response) {
       toast.error(error.response.data.message)
      } else {
       toast.error("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketnote:token')
    localStorage.removeItem('@rocketnote:user')


    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user)
      localStorage.setItem("@rocketnote:user", JSON.stringify(user))

      setData({ user, token: data.token })

      toast.success("Perfil atualizado")
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o perfil.")
      }

       throw error
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnote:token')
    const user = localStorage.getItem('@rocketnote:user')

    if (token && user) {
      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData({
          token, user: JSON.parse(user)
        })
      } catch (error) {
        console.error("Erro ao processar dados do localStorage:", error);
        signOut();
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }