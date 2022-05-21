import React from 'react';
import ViewAnimation from '../../components/ViewAnimation';
import { ContainerCreateAnimation } from './styled';

function CreateAnimation() {
  return (
    <ContainerCreateAnimation>
      <div className="leftSide">
        <h2>Create Animation</h2>
        <label htmlFor="">
          HTML
          <textarea className="htmlBox" />
        </label>
        <label htmlFor="">
          CSS
          <textarea className="cssBox" />
        </label>
      </div>
      <div className="rightSide">
        <ViewAnimation />
      </div>
    </ContainerCreateAnimation>
  );
}

export default CreateAnimation;
