import React from 'react'

import styled from 'styled-components'

import Head from '../../components/Head'

const P404 = styled.h1`
  color: ${({ theme }) => theme.colors.orangeText};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`

// import { Container } from './styles';

function Page404() {
  return (
    <>
      <Head title="404" />
      <P404>Página não encontrada :(</P404>
    </>
  )
}

export default Page404
