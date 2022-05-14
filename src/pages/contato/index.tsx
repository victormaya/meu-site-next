import React from 'react';
import Cards from '../../components/Cards';

import wpp from '../../assets/wpp.jpeg';
import gmail from '../../assets/gmail.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/GitHub.jpg';

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled';
import Head from '../../components/Head';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const containerSkills = React.useRef();

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Contato" />
      <Cards
        scrollOn={scrollOn}
        imagem={wpp.src}
        titulo="Whatsapp"
        subtitulo="(99) 9 8275-6405"
        conteudo={
          <a
            href="https://api.whatsapp.com/send?phone=5599982756405"
            target="_blank"
          >
            Clique Aqui
          </a>
        }
      />
      <Cards
        scrollOn={scrollOn}
        imagem={gmail.src}
        titulo="E-mail"
        subtitulo="victor.maya42@gmail.com"
      />
      <Cards
        scrollOn={scrollOn}
        imagem={github.src}
        titulo="GitHub"
        subtitulo="@victormaya"
        conteudo={
          <a href="https://github.com/victormaya" target="_blank">
            Clique Aqui
          </a>
        }
      />
      <Cards
        scrollOn={scrollOn}
        imagem={linkedin.src}
        titulo="LinkedIn"
        subtitulo="@victor-maya"
        conteudo={
          <a href="https://www.linkedin.com/in/victor-maya/" target="_blank">
            Clique Aqui
          </a>
        }
      />
    </ContainerDefaultPage>
  );
}

export default Skills;
