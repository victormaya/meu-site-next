import React from 'react';
import { Container, ContentLeft, ContentRight } from './styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import perfil from '../assets/perfil.jpeg';
import MyAge from '../functions/MyAge';
import YearsExperience from '../functions/YearsExperience';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <ContentLeft>
          <div className="perfil animaLeft">
            <img src={perfil.src} alt="Foto de Perfil" />
          </div>
          <div className="textos animaLeft">
            <h1>OI, SOU VICTOR MAYA.</h1>
            <p>
              Tenho {MyAge()} anos, maranhense, graduado em Ciência e
              Tecnologia(UFMA), graduando em Engenharia da Computação(UFMA).{' '}
              <br />
              Sou desenvolvedor front-end com {YearsExperience()} anos de
              experiência. Trabalho com JavaScript, lidando diariamente com
              ReactJs e Native. <br />
              Sou apaixonado por tecnologia, viagens e música. Vivo entre o
              analógico e o digital.
            </p>
          </div>
        </ContentLeft>
        <ContentRight>
          <Header />
          {children}
        </ContentRight>
      </Container>
      <Footer />
    </>
  );
}

export default DefaultLayout;
