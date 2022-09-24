import styles from '@styles/login.module.scss'
import Link from 'next/link'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<{ userName: string; password: string }>
  onSubmit: any
  handleSubmit: any
}
export default function LoginView (props: Props) {
  const { register, handleSubmit, onSubmit } = props
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h1>Iniciar Sesion</h1>
        <input type="text" placeholder="Usuario" {...register('userName')} />
        <input
          type="password"
          placeholder="Contraseña"
          {...register('password')}
        />
        <div className={styles.submitButtonCont}>
          <button type="submit">Iniciar Sesion</button>
          <span>
            O registrate <Link href="/register">aqui</Link>
          </span>
        </div>
      </form>
    </div>
  )
}
