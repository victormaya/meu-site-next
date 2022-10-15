import React from 'react'

import github from '../../assets/GitHub.jpg'
import gmail from '../../assets/gmail.png'
import linkedin from '../../assets/linkedin.png'
import wpp from '../../assets/wpp.jpeg'
import Cards from '../../components/Cards'
import Head from '../../components/Head'
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Contato" />
      <Cards
        scrollOn={scrollOn}
        imagem={wpp.src}
        titulo="Whatsapp"
        alt="Whatsapp"
        subtitulo="(99) 9 8275-6405"
        conteudo={
          <a
            href="https://api.whatsapp.com/send?phone=5599982756405"
            target="_blank"
            rel="noreferrer"
          >
            Clique Aqui
          </a>
        }
      />
      <Cards
        scrollOn={scrollOn}
        imagem={gmail.src}
        titulo="E-mail"
        alt="E-mail"
        subtitulo="victor.maya42@gmail.com"
      />
      <Cards
        scrollOn={scrollOn}
        imagem={github.src}
        titulo="GitHub"
        alt="GitHub"
        subtitulo="@victormaya"
        conteudo={
          <a
            href="https://github.com/victormaya"
            target="_blank"
            rel="noreferrer"
          >
            Clique Aqui
          </a>
        }
      />
      <Cards
        scrollOn={scrollOn}
        imagem={linkedin.src}
        titulo="LinkedIn"
        alt="LinkedIn"
        subtitulo="@victor-maya"
        conteudo={
          <a
            href="https://www.linkedin.com/in/victor-maya/"
            target="_blank"
            rel="noreferrer"
          >
            Clique Aqui
          </a>
        }
      />
    </ContainerDefaultPage>
  )
}

export default Skills
