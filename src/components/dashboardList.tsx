import useZustand from '@context/useZustand'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { IoChatbubblesOutline } from 'react-icons/io5'

import style from '@styles/sidebar.module.scss'
import DashboardListItem from './dashboardListItem'
export default function DashboardList () {
  const { logout } = useZustand()

  const listObject = [
    {
      destinyPath: '/createRoom',
      icon: <AiOutlineUsergroupAdd className={style.iconDashboard} />,
      content: 'Crear Sala',
      key: 1
    },
    {
      destinyPath: '/users',
      icon: <HiOutlineUserGroup className={style.iconDashboard} id={style.a} />,
      content: 'Usuarios',
      key: 2
    },
    {
      destinyPath: '/rooms',
      icon: <IoChatbubblesOutline className={style.iconDashboard} />,
      content: 'Salas',
      key: 3
    },
    {
      destinyPath: '/',
      icon: <CgLogOut className={style.iconDashboard} id={style.a} />,
      content: 'Cerrar Sesion',
      optionalFunction: logout,
      key: 4
    }
  ]

  return (
    <div className={style.owo}>
      {listObject.map((item) => {
        return (
          <DashboardListItem
            destinyPath={item.destinyPath}
            icon={item.icon}
            content={item.content}
            optionalFunction={item.optionalFunction}
            key={item.key}
          />
        )
      })}
    </div>
  )
}
