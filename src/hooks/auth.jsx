import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem('@filmfanatic:user', JSON.stringify(user))
      localStorage.setItem('@filmfanatic:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@filmfanatic:token')
    localStorage.removeItem('@filmfanatic:user')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if(avatarFile) {
        const fileUpdateForm = new FormData()
        fileUpdateForm.append('avatar', avatarFile) 

        const response = await api.patch('/users/avatar', fileUpdateForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@filmfanatic:user', JSON.stringify(user))

      setData({ user, token: data.token })

      alert("Perfil atualizado!")      
    } catch (error) { 
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@filmfanatic:token')
    const user = localStorage.getItem('@filmfanatic:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
       signIn,
       signOut,
       updateProfile,
       user: data.user 
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