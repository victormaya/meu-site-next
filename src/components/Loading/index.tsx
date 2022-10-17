import React from 'react'

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'
import { ContainerLoading } from './styled'

function Loading() {
  return (
    <ContainerDefaultPage>
      <ContainerLoading>
        <div className="loader" />
      </ContainerLoading>
    </ContainerDefaultPage>
  )
}

export default Loading
