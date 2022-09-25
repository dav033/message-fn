import { useState } from 'react'

export const useCount = () => {
  const [contador, setContador] = useState<number>(0)
  const aumentar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
  }
  const reset = () => {
    setContador(2)
  }

  //   useEffect(() => {
  //     if (contador === 10) {
  //       setContador(2)
  //     }
  //   }, [contador])

  return {
    aumentar,
    restar,
    reset,
    contador
  }
}
