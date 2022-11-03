import React from 'react'

import { NextSeo } from 'next-seo'

import CardMusic from '../components/CardMusic'
import Cards from '../components/Cards'
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

function Slug({ data }: { data: IData[] }) {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <NextSeo title={data[0].type} />
      {data.length > 0 ? (
        data.map((item) =>
          item.type !== 'Music' ? (
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
          ) : (
            <CardMusic
              key={item.title}
              scrollOn={scrollOn}
              title={item.title}
              file={item.file}
            />
          )
        )
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
    },
    revalidate: 21600
  }
}

export default Slug
