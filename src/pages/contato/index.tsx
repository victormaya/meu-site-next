import React from 'react'

import Cards from '../../components/Cards'
import Head from '../../components/Head'
import Loading from '../../components/Loading'
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'

function Contato({
  contatoData
}: {
  contatoData: {
    contato: string
    image: string
    link: string
    titulo: string
  }[]
}) {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Contato" />
      {contatoData.length > 0 ? (
        contatoData.map((cont) => (
          <Cards
            key={cont.titulo}
            scrollOn={scrollOn}
            imagem={cont.image}
            titulo={cont.titulo}
            alt={cont.titulo}
            link={cont.link}
            subtitulo={cont.contato}
          />
        ))
      ) : (
        <Loading />
      )}
    </ContainerDefaultPage>
  )
}

export async function getStaticProps() {
  let contatoData = {}
  await fetch('https://swnxabum.directus.app/items/contato').then(
    async (response) => {
      const json = await response.json()
      contatoData = json.data
    }
  )
  return {
    props: {
      contatoData
    }
  }
}

export default Contato
