import React from 'react';
import Head from '../../components/Head';
import Cards from '../../components/Cards';

import America from '../../assets/america.png';
import Stakato from '../../assets/stakato.png';
import PHOENIX from '../../assets/Phoenix.jpg';

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Portifólio" />
      <Cards
        scrollOn={scrollOn}
        imagem={America.src}
        titulo="América Burguer"
        // subtitulo='JUNHO - 2020 / DEZEMBRO - 2021'
        conteudo={
          <a
            href="http://americaburguer.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            Clique Aqui
          </a>
        }
      />
      <Cards
        scrollOn={scrollOn}
        imagem={Stakato.src}
        titulo="Academia de Música Stakato"
        conteudo={
          <a
            href="http://academiastakato.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            Clique Aqui
          </a>
        }
      />
      <Cards
        scrollOn={scrollOn}
        imagem={PHOENIX.src}
        titulo="Phoenix App"
        conteudo={
          <a
            href="https://play.google.com/store/apps/details?id=com.phoenix.english.course"
            target="_blank"
            rel="noreferrer"
          >
            Clique Aqui
          </a>
        }
      />
    </ContainerDefaultPage>
  );
}

export default Skills;
