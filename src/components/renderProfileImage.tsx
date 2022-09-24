import { FaRegUser } from 'react-icons/fa'

import Image from 'next/image'
import style from '@styles/sidebar.module.scss'

interface Props {
  profileImage: string
}
export default function RenderProfileImage (props: Props) {
  const { profileImage } = props
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        className={style.userProfileImage}
        alt="profileImage"
        width={'140px'}
        height={'140px'}
      ></Image>
    )
  } else {
    return <FaRegUser className={style.iconProfile} />
  }
}
