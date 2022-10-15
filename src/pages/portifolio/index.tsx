import React from 'react'

import Cards from '../../components/Cards'
import Head from '../../components/Head'
import Loading from '../../components/Loading'
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'

function Portifolio({
  portData
}: {
  portData: {
    image: string
    link: string
    sort: null
    title: string
  }[]
}) {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Portifólio" />
      {portData.length > 0 ? (
        portData.map((port) => (
          <Cards
            key={port.title}
            scrollOn={scrollOn}
            imagem={port.image}
            titulo={port.title}
            alt={port.title}
            link={port.link}
          />
        ))
      ) : (
        <Loading />
      )}
    </ContainerDefaultPage>
  )
}

export async function getStaticProps() {
  let portData = {}
  await fetch('https://swnxabum.directus.app/items/portifolio').then(
    async (response) => {
      const json = await response.json()
      portData = json.data
    }
  )
  return {
    props: {
      portData
    }
  }
}

export default Portifolio
