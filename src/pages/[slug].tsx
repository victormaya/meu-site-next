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

export async function getStaticPaths() {
  let abas = [{ title: '', path: '' }]
  await fetch('https://swnxabum.directus.app/items/abas').then(
    async (response) => {
      const json = await response.json()
      abas = json.data
    }
  )

  const paths = abas.map((aba) => ({
    params: { slug: aba.path.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  let data = {}
  await fetch(`https://swnxabum.directus.app/items/${params.slug}`).then(
    async (response) => {
      const json = await response.json()
      data = json.data
    }
  )
  return {
    props: {
      data
    }
  }
}

export default Skills