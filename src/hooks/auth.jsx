import { createContext, useContext } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = createContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }