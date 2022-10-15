import React from 'react'

import Cards from '../../components/Cards'
import Head from '../../components/Head'
import Loading from '../../components/Loading'
import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'

function Skills({
  skillsData
}: {
  skillsData: {
    image: string
    name: string
  }[]
}) {
  const [scrollOn, setScrollOn] = React.useState(false)

  return (
    <ContainerDefaultPage onScroll={() => setScrollOn(!scrollOn)}>
      <Head title="Skills" />
      {skillsData.length > 0 ? (
        skillsData.map((skill) => (
          <Cards
            scrollOn={scrollOn}
            imagem={skill.image}
            titulo={skill.name}
            key={skill.name}
            alt={skill.name}
          />
        ))
      ) : (
        <Loading />
      )}
    </ContainerDefaultPage>
  )
}

export async function getStaticProps() {
  let skillsData = {}
  await fetch('https://swnxabum.directus.app/items/Skills').then(
    async (response) => {
      const json = await response.json()
      skillsData = json.data
    }
  )
  return {
    props: {
      skillsData
    }
  }
}

export default Skills
