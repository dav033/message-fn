import styles from '@styles/registerInput.module.scss'
import { UseFormRegister } from 'react-hook-form'

enum ids {
  'email',
  'userName',
  'password',
  'confirmPassword'
}

interface Props {
  type: string
  register: UseFormRegister<{
    userName: string
    password: string
    email: string
    confirmPassword: string
  }>
  placeholder: string
  id: 'email' | 'password' | 'userName' | 'confirmPassword'
}

export default function RegisterInput (props: Props) {
  const { type, placeholder, register, id } = props
  return (
    <div className={styles.registerInput}>
      <label>{placeholder}</label>
      <input className={styles.inputRegister} type={type} {...register(id)} />
    </div>
  )
}
