import SidebarView from './sidebarView'

import { useMounted } from '@hooks/useMounted'
import useZustand from '@context/useZustand'
import { useRef } from 'react'
export default function Sidebar () {
  const { hasMounted } = useMounted()

  const { isLogged } = useZustand()

  const overlay = useRef(null)
  const sidebar = useRef(null)

  const openMenu = () => {
    if (overlay.current && sidebar.current) {
      overlay.current.style.display = 'block'
      sidebar.current.style.width = '250px'
    }
  }

  const closeMenu = () => {
    if (overlay.current && sidebar.current) {
      overlay.current.style.display = 'none'
      sidebar.current.style.width = '0px'
    }
  }

  return isLogged() && hasMounted
    ? (
    <SidebarView
      overlay={overlay}
      sidebar={sidebar}
      openMenu={openMenu}
      closeMenu={closeMenu}
    />
      )
    : null
}
