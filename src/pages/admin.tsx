import React, { useEffect } from 'react'

import Router from 'next/router'

import Loading from '../components/Loading'

function Pages() {
  useEffect(() => {
    Router.push('https://swnxabum.directus.app/')
  }, [])

  return <Loading />
}

export default Pages
