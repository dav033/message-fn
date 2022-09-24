import useZustand from '@context/useZustand'
import style from '../styles/FullScreenLoader.module.scss'

export default function FullScreenLoader () {
  const { isLoading } = useZustand()
  return (
    <div className={style.overview}>
      <div className={style.middle}>
        <div className={`${style.bar} ${style.bar1}`}></div>
        <div className={`${style.bar} ${style.bar2}`}></div>
        <div className={`${style.bar} ${style.bar3}`}></div>
        <div className={`${style.bar} ${style.bar4}`}></div>
        <div className={`${style.bar} ${style.bar5}`}></div>
        <div className={`${style.bar} ${style.bar6}`}></div>
        <div className={`${style.bar} ${style.bar7}`}></div>
        <div className={`${style.bar} ${style.bar8}`}></div>
      </div>
    </div>
  )
}
