import { createContext, useContext, useState } from "react"

import { api } from "../services/api"
import { useEffect } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem('@filmfanatic:user', JSON.stringify(user))
      localStorage.setItem('@filmfanatic:token', token)

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({user, token})
      console.log(user, token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.setItem('@filmfanatic:user')
    const token = localStorage.setItem('@filmfanatic:token')

    if (user && token) {
      
    }

  },[])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = createContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }