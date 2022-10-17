import React from 'react'

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'
import Head from '../Head'
import { ContainerLoading } from './styled'

function Loading() {
  return (
    <ContainerDefaultPage>
      {/* <Head title="..." /> */}
      <ContainerLoading>
        <div className="loader" />
      </ContainerLoading>
    </ContainerDefaultPage>
  )
}

export default Loading
