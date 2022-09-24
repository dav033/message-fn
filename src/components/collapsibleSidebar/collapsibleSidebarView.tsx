import RenderProfileImage from '@components/renderProfileImage'
import style from '@styles/sidebar.module.scss'
import { userSession } from 'src/types'

interface Props {
  open: () => void
  close: () => void
  show: Boolean
  user: userSession
  sidebar: any
}

export default function CollapsileSidebarView (props: Props) {
  const { sidebar } = props
  return (
    <div
      className={style.collapsileSidebar}
      id="collapsileSidebar"
      ref={sidebar}
    >
      <div className={style.profileContainer}>
        <div className={style.userProfileImage}>
          <div className={style.overlayProfileImage} />

          <RenderProfileImage profileImage={''} />
        </div>
        <h2 style={{ marginTop: '5px', color: '#dcdcdd' }}>{'ol'}</h2>
      </div>
      {/* <DashboardList /> */}
    </div>
  )
}
