import React from 'react';
import Gear from '../../assets/svgs/gear';
import Logo from '../../assets/svgs/logo';

import ContainerViewAnimation from './styled';

function ViewAnimation() {
  return (
    <ContainerViewAnimation>
      <div className="header">
        <Logo />
        <a href="https://instagram.com/victormaya_">#victormaya_</a>
      </div>
      <div className="view" >
        ANIMAÇÃO
      </div>
      <div className="contents">
        <div className="box">
          <div className="bar">
            <div />
            <div />
            <div />
          </div>
          <div className="content" />
        </div>
        <div className="box">
          <div className="bar">
            <div />
            <div />
            <div />
          </div>
          <div className="content" />
        </div>
      </div>
      <div className="boxGear">
        <Gear />
      </div>
    </ContainerViewAnimation>
  );
}

export default ViewAnimation;
