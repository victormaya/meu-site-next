import React from 'react';

import { ContainerLoading } from './styled';

const Loading: React.FC = () => {
  return (
    <ContainerLoading>
      <div className='circle'/>
    </ContainerLoading>
  );
};

export default Loading;
