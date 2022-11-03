import React from 'react'

import { NextSeo } from 'next-seo'
import styled from 'styled-components'

const P404 = styled.h1`
  color: ${({ theme }) => theme.colors.orangeText};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`

function Page404() {
  return (
    <>
      <NextSeo title="404" />
      <P404>Página não encontrada :(</P404>
    </>
  )
}

export default Page404
