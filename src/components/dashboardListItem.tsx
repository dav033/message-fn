import style from '@styles/dashboardListItem.module.scss'
import Link from 'next/link'
interface Props {
  destinyPath: string
  icon: any
  content: string
  optionalFunction?: () => void
}

export default function DashboardListItem (props: Props) {
  const { destinyPath, icon, content, optionalFunction } = props
  return (
    <Link href={destinyPath}>
      <a onClick={optionalFunction} className={style.links}>
        {icon}
        {content}
      </a>
    </Link>
  )
}
