import React from 'react';
import Head from '../../components/Head';
import Cards from '../../components/Cards';
import html5Img from '../../assets/html5.jpg';
import css3Img from '../../assets/css3.jpg';
import jsImg from '../../assets/js.png';
import reactjsImg from '../../assets/reactjs.png';
import reactnativeImg from '../../assets/reactnative.jpg';
import nextImg from '../../assets/nextjs.png';
import redux from '../../assets/redux.png';
import bootstrap from '../../assets/bootstrap.png';
import materialui from '../../assets/Material.png';
import figma from '../../assets/figma.png';
import adobexd from '../../assets/XD.png';
import wp from '../../assets/wp.png';
import git from '../../assets/git.png';
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const skillsList = [
    {
      imagem: html5Img,
      titulo: 'HTML5',
    },
    {
      imagem: css3Img,
      titulo: 'CSS3',
    },
    {
      imagem: jsImg,
      titulo: 'JavaScript',
    },
    {
      imagem: reactjsImg,
      titulo: 'ReactJS',
    },
    {
      imagem: reactnativeImg,
      titulo: 'React Native',
    },
    {
      imagem: nextImg,
      titulo: 'NextJS',
    },
    {
      imagem: bootstrap,
      titulo: 'BootStrap',
    },
    {
      imagem: materialui,
      titulo: 'MaterialUI',
    },
    {
      imagem: figma,
      titulo: 'Figma',
    },
    {
      imagem: adobexd,
      titulo: 'AdobeXD',
    },
    {
      imagem: wp,
      titulo: 'WordPress',
    },
    {
      imagem: git,
      titulo: 'GIT',
    },
  ];

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Skills" />
      {skillsList.map((skill) => (
        <Cards
          scrollOn={scrollOn}
          imagem={skill.imagem.src}
          titulo={skill.titulo}
          key={skill.titulo}
        />
      ))}
    </ContainerDefaultPage>
  );
}

export default Skills;
