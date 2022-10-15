import React from 'react'

import { useRouter } from 'next/router'

function useLoading() {
  const router = useRouter()

  const [loading, setLoading] = React.useState(false)

  function handleStart(url: string) {
    url !== router.asPath && setLoading(true)
  }
  function handleComplete(url: string) {
    url === router.asPath && setLoading(false)
  }

  router.events?.on('routeChangeStart', handleStart)
  router.events?.on('routeChangeComplete', handleComplete)
  router.events?.on('routeChangeError', handleComplete)

  return { loading }
}

export default useLoading
