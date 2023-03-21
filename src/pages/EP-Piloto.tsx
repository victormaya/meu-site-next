import React, { useEffect } from 'react'

import Router from 'next/router'
import styled from 'styled-components'

import Head from '../components/Head'
import Loading from '../components/Loading'

function Pages() {
  useEffect(() => {
    Router.push(
      'https://www.youtube.com/playlist?list=PLzhXLskehFYmohIv4uMajOdeHBJ0_RQHK'
    )
  }, [])

  const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.orangeText};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  `

  return (
    <div>
      <Head title="EP-Piloto" />
      <H1>Redirecionando você pro meu EP - Piloto</H1>
      <Loading />
    </div>
  )
}

export default Pages
