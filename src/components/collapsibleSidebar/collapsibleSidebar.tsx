import useZustand from '@context/useZustand'
import { useShow } from '@hooks/useShow'
import CollapsileSidebarView from './collapsibleSidebarView'

export default function CollapisbleSidebar ({ sidebar }) {
  const { open, close, show } = useShow()
  const { user } = useZustand()
  return (
    <CollapsileSidebarView
      sidebar={sidebar}
      open={open}
      close={close}
      show={show}
      user={user}
    />
  )
}
