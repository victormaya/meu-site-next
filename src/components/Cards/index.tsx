import React from 'react';

import { ContainerCard } from './styled';
import useAnimation from '../../hooks/useAnimation';

interface ICards {
  imagem: string;
  titulo: string;
  subtitulo?: string;
  conteudo?: string | React.ReactNode;
  scrollOn: boolean;
}

function Cards({ imagem, titulo, subtitulo, conteudo, scrollOn }: ICards) {
  const card = React.useRef<HTMLHeadingElement>({} as HTMLHeadingElement);
  useAnimation(card, scrollOn);

  return (
    <ContainerCard ref={card}>
      <div className="image">
        <img src={imagem} />
      </div>
      <div>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{conteudo}</p>
      </div>
    </ContainerCard>
  );
}

export default Cards;
