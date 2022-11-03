import React, { useEffect } from 'react'

import Router from 'next/router'
import styled from 'styled-components'

import Loading from '../components/Loading'

function Pages() {
  useEffect(() => {
    Router.push('https://swnxabum.directus.app/')
  }, [])

  const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.orangeText};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  `

  return (
    <div>
      <H1>Redirecionando pro Admin</H1>
      <Loading />
    </div>
  )
}

export default Pages
