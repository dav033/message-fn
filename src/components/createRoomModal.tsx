import { motion } from 'framer-motion'

import style from '@styles/createRoomModal.module.scss'
import { useMounted } from '@hooks/useMounted'
import ReactDOM from 'react-dom'

interface Props {
  show: boolean
  close: () => void
}

export default function CreateRoomModal () {
  const { hasMounted } = useMounted()

  const owo = true

  const modalContent = owo
    ? (
    <div className={style.overlay}>
      <motion.div className={style.modal}>ha</motion.div>
    </div>
      )
    : null

  if (hasMounted) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  }
}
