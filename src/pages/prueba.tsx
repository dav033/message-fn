import { useCount } from '@hooks/useCount'
import React from 'react'

function Prueba () {
  const {
    aumentar: plus,
    restar: less,
    reset: zero,
    contador: cont
  } = useCount()

  return (
    <div>
      <button onClick={plus}>suma</button>
      <button onClick={less}>resta</button>
      <button onClick={zero}>reset</button>
      <label style={{ color: 'white' }}>{cont}</label>
    </div>
  )
}

export default React.memo(Prueba)
