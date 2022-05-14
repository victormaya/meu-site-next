import React from 'react';

import { ContainerFooter } from './styled'

function Footer() {
  const date = new Date()
  return (
    <ContainerFooter>
      <p>Victor Maya - {date.getFullYear()}</p>
      <div className='logo' />
    </ContainerFooter>
  );
}

export default Footer;
