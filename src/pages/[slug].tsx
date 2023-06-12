import React from 'react'

import { abas, content } from '../api/content'
import CardMusic from '../components/CardMusic'
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

function Slug({ data }: { data: IData[] }) {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title={data[0].type} />
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
  const paths = abas.map((aba) => ({
    params: { slug: aba.path }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = content[params.slug as keyof typeof content] as unknown as {
    [key: string]: []
  }

  return {
    props: {
      data
    }
  }
}

export default Slug
