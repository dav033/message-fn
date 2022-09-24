import useZustand from '@context/useZustand'
import { useRedirectPublic } from '@hooks/useRedirectPublic'
import { useForm } from 'react-hook-form'
import RegisterView from './registerView'

interface RegisterForm {
  userName: string
  password: string
  email: string
  confirmPassword: string
}
export default function FRegister () {
  useRedirectPublic()

  const { register: reg } = useZustand()

  const { register, handleSubmit } = useForm<RegisterForm>()

  const onSubmit = (data: RegisterForm) => {
    reg(data)
  }
  return (
    <RegisterView
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  )
}
