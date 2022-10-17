import React from 'react'

import Cards from '../components/Cards'
import Head from '../components/Head'
import Loading from '../components/Loading'
import { ContainerDefaultPage } from '../styles/ContainerPagesStyled'

interface IData {
  image: string
  title: string
  subtitle: string
  content: string
  link: string
  type: string
  file: string
}

function Skills({ data }: { data: IData[] }) {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title={data[0].type} />
      {data.length > 0 ? (
        data.map((item) => (
          <Cards
            scrollOn={scrollOn}
            imagem={item.image}
            titulo={item.title}
            key={item.title}
            alt={item.title}
            subtitulo={item.subtitle}
            conteudo={item.content}
            link={item.link}
            file={item.file}
          />
        ))
      ) : (
        <Loading />
      )}
    </ContainerDefaultPage>
  )
}

export async function getServerSideProps({
  resolvedUrl
}: {
  resolvedUrl: string
}) {
  const slug = resolvedUrl.split('/')[1]
  let data = {}
  await fetch(`https://swnxabum.directus.app/items/${slug}`).then(
    async (response) => {
      const json = await response.json()
      data = json.data
    }
  )
  return {
    props: {
      data
    },
    notFound: !data && true
  }
}

export default Skills
