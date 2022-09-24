import useZustand from '@context/useZustand'
import type { NextPage } from 'next'

import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { logout, isLogged } = useZustand()
  return !isLogged()
    ? (
    <div className={styles.container}>
      <Link href="/login">LOGIN</Link>
      <button onClick={logout}>CERRAR SESION</button>
    </div>
      )
    : null
}

export default Home
