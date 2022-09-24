import useZustand from '@context/useZustand'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRedirectPublic = () => {
  const { setLoading } = useZustand()
  const { isLogged } = useZustand()
  const router = useRouter()
  const redirect = () => {
    return !isLogged() ? null : router.push('/')
  }

  useEffect(() => {
    setLoading(true)
    redirect()
    setLoading(false)
  })
}
