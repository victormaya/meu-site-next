import React from 'react';
import Cards from '../../components/Cards';

import UFMA from '../../assets/UFMA.jpg';

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled';
import Head from '../../components/Head';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Educação" />
      <Cards
        scrollOn={scrollOn}
        imagem={UFMA.src}
        titulo="Bel. em Ciência e Tecnologia"
        subtitulo="Universidade Federal do Maranhão"
        conteudo="2015 - 2020"
      />
      <Cards
        scrollOn={scrollOn}
        imagem={UFMA.src}
        titulo="Engenharia da Computação"
        subtitulo="Universidade Federal do Maranhão"
        conteudo="2020 - ATUAL"
      />
    </ContainerDefaultPage>
  );
}

export default Skills;
