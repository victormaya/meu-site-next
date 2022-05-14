import React from 'react';

import { ContainerLoading } from './styled';
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled';

function Loading() {
  return (
    <ContainerDefaultPage>
      <ContainerLoading>
        <div className="circle" />
      </ContainerLoading>
    </ContainerDefaultPage>
  );
}

export default Loading;
