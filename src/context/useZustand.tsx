import { userSession } from 'src/types'
import { useGlobal, useUser } from './stores'

export default function useZustand () {
  const user = useUser((state: { user: userSession }) => state.user)

  const login = useUser(
    (state: {
      login: (
        userCredentialsUsername: string,
        usersCredentialsPassword: string
      ) => void
    }) => state.login
  )

  const register = useUser(
    (state: {
      register: (args: {
        userName: string
        email: string
        password: string
        confirmPassword: string
      }) => void
    }) => state.register
  )

  const logout = useUser((state: { logout: () => void }) => state.logout)

  const isLogged = useUser(
    (state: { isLogged: () => boolean }) => state.isLogged
  )

  const isLoading = useGlobal(
    (state: { isLoading: boolean }) => state.isLoading
  )

  const setLoading = useGlobal(
    (state: { setLoading: (value: boolean) => void }) => state.setLoading
  )

  return {
    user,
    login,
    register,
    logout,
    isLogged,
    isLoading,
    setLoading
  }
}
