import React from 'react'

import UFMA from '../../assets/UFMA.jpg'
import Cards from '../../components/Cards'
import Head from '../../components/Head'
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Educação" />
      <Cards
        scrollOn={scrollOn}
        imagem={UFMA.src}
        titulo="Bel. em Ciência e Tecnologia"
        alt="Bel. em Ciência e Tecnologia"
        subtitulo="Universidade Federal do Maranhão"
        conteudo="2015 - 2020"
      />
      <Cards
        scrollOn={scrollOn}
        imagem={UFMA.src}
        titulo="Engenharia da Computação"
        alt="Engenharia da Computação"
        subtitulo="Universidade Federal do Maranhão"
        conteudo="2020 - ATUAL"
      />
    </ContainerDefaultPage>
  )
}

export default Skills
