import RegisterInput from '@components/RegisterInput'
import styles from '@styles/register.module.scss'
import Link from 'next/link'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<{
    userName: string
    password: string
    email: string
    confirmPassword: string
  }>
  onSubmit: any
  handleSubmit: any
}

export default function RegisterView (props: Props) {
  const { register, handleSubmit, onSubmit } = props

  return (
    <div className={styles.registerContainer}>
      <form className={styles.formRegister} onSubmit={handleSubmit(onSubmit)}>
        <h1>Registro</h1>

        <div className={styles.inputsContainer}>
          <div className={styles.box}>
            <RegisterInput
              placeholder="Usuario"
              type="text"
              register={register}
              id="userName"
            />
            <RegisterInput
              register={register}
              placeholder="Correo"
              type="email"
              id="email"
            />
          </div>

          <div className={styles.box}>
            <RegisterInput
              placeholder="Contraseña"
              type="password"
              register={register}
              id="password"
            />

            <RegisterInput
              register={register}
              placeholder="Confirmar contraseña"
              type="password"
              id="confirmPassword"
            />
          </div>
        </div>

        <div className={styles.submitCont}>
          <button type="submit">Registrarse</button>
          <span>
            O inicia sesion <Link href="/login">aqui</Link>
          </span>
        </div>
      </form>
    </div>
  )
}
