import React from 'react';
import Head from '../Head';
import { ContainerLoading } from './styled';
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled';

function Loading() {
  return (
    <ContainerDefaultPage>
      <Head title="..." />
      <ContainerLoading>
        <div className="circle" />
      </ContainerLoading>
    </ContainerDefaultPage>
  );
}

export default Loading;
