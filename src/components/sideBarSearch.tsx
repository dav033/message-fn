import style from '@styles/sidebar.module.scss'
import { FaBars } from 'react-icons/fa'

interface Props {
  openMenu: () => void
}

export default function SideBarSearch (props: Props) {
  const { openMenu } = props
  return (
    <div
      style={{
        backgroundColor: '',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <FaBars className={style.iconMenu} onClick={() => openMenu()} />
      <input type="text" placeholder="buscar.." className={style.searchInput} />
    </div>
  )
}
