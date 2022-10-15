import React, { useContext } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { HomeContext } from '../context/homeContext'
import MyAge from '../functions/MyAge'
import YearsExperience from '../functions/YearsExperience'
import { Container, ContentLeft, ContentRight } from './styled'

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { dataHome, loading } = useContext(HomeContext)

  return (
    <>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ContentLeft>
            <div className="perfil animaLeft">
              <img
                src={`https://swnxabum.directus.app/assets/${dataHome.profile}`}
                alt="Foto de Perfil"
              />
            </div>
            <div className="textos animaLeft">
              <h1>{dataHome.apresentacao}</h1>
              <p>
                {dataHome.descricao
                  ?.replace('AGE', MyAge().toString())
                  .replace('YEARS', YearsExperience().toString())}
              </p>
            </div>
          </ContentLeft>
        )}
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
