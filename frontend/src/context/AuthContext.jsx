import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('schoolUser')

    return savedUser
      ? JSON.parse(savedUser)
      : null
  })

  const login = (userData) => {
    localStorage.setItem(
      'schoolUser',
      JSON.stringify(userData)
    )

    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('schoolUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
