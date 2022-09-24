import CollapisbleSidebar from '@components/collapsibleSidebar/collapsibleSidebar'
import SideBarSearch from '@components/sideBarSearch'
import style from '@styles/sidebar.module.scss'
import { MutableRefObject } from 'react'

interface Props {
  overlay: MutableRefObject<undefined>
  sidebar: MutableRefObject<undefined>
  openMenu: () => void
  closeMenu: () => void
}
export default function SidebarView (props: Props) {
  const { overlay, openMenu, sidebar, closeMenu } = props

  return (
    <div className={style.sidebar}>
      <div
        className={style.overlay}
        id="overlay"
        ref={overlay}
        onClick={() => closeMenu()}
      />
      <CollapisbleSidebar sidebar={sidebar} />
      <div className={style.sidebar}>
        <div className={style.sidebarMenu} style={{ paddingTop: '10px' }}>
          <SideBarSearch openMenu={openMenu} />

          {/* <ChatDashboard /> */}
        </div>
      </div>
    </div>
  )
}
