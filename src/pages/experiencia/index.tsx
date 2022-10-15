import React from 'react'

import Cards from '../../components/Cards'
import Head from '../../components/Head'
import Loading from '../../components/Loading'
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'

function Experiencia({
  expData
}: {
  expData: {
    conteudo: string
    image: string
    subtitulo: string
    titulo: string
  }[]
}) {
  const [scrollOn, setScrollOn] = React.useState(false)
  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Experiência" />
      {expData.length > 0 ? (
        expData.map((exp) => (
          <Cards
            scrollOn={scrollOn}
            imagem={exp.image}
            titulo={exp.titulo}
            subtitulo={exp.subtitulo}
            key={exp.titulo}
            alt={exp.titulo}
            conteudo={exp.conteudo}
          />
        ))
      ) : (
        <Loading />
      )}
    </ContainerDefaultPage>
  )
}

export async function getStaticProps() {
  let expData = {}
  await fetch('https://swnxabum.directus.app/items/Experiencia').then(
    async (response) => {
      const json = await response.json()
      expData = json.data
    }
  )
  return {
    props: {
      expData
    }
  }
}

export default Experiencia
