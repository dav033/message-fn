import useZustand from '@context/useZustand'
import { useRedirectPublic } from '@hooks/useRedirectPublic'
import { useForm } from 'react-hook-form'
import LoginView from './loginView'

interface LoginForm {
  userName: string
  password: string
}

export default function Login () {
  useRedirectPublic()

  const { login, isLogged } = useZustand()

  const { register, handleSubmit } = useForm<LoginForm>()

  const onSubmit = (data: LoginForm) => {
    const { userName, password } = data

    login(userName, password)
  }

  return isLogged()
    ? (
    <div />
      )
    : (
    <LoginView
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
      )
}
