import React from 'react'

import profile from '../api/profile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import YearsExperience from '../functions/YearsExperience'
import { Container, ContentLeft, ContentRight } from './styled'

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <div className="layer1" />
        <div className="layer2" />
        <ContentLeft>
          <div className="perfil animaLeft">
            <img src={profile.image} alt="Foto de Perfil" />
          </div>
          <div className="textos animaLeft">
            <h1>{profile.apresentacao}</h1>
            <p>
              {profile.descricao.replace('YEARS', YearsExperience().toString())}
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
  )
}

export default DefaultLayout
