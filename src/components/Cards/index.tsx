import React from 'react'

import useAnimation from '../../hooks/useAnimation'
import { ContainerCard } from './styled'

function Cards({
  imagem,
  titulo,
  subtitulo,
  conteudo,
  scrollOn,
  alt,
  link
}: {
  imagem: string
  titulo: string
  subtitulo?: string
  conteudo?: string
  scrollOn: boolean
  alt: string
  link?: string
}) {
  const card = React.useRef<HTMLHeadingElement>({} as HTMLHeadingElement)
  useAnimation(card, scrollOn)

  return (
    <ContainerCard ref={card}>
      <div className="image">
        <img src={`https://swnxabum.directus.app/assets/${imagem}`} alt={alt} />
      </div>
      <div>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        {conteudo
          ?.toString()
          .split('<br />')
          .map((cont) => (
            <p key={cont}>{cont}</p>
          ))}
        {link && (
          <p>
            <a href={link} target="_blank" rel="noreferrer">
              Clique Aqui
            </a>
          </p>
        )}
      </div>
    </ContainerCard>
  )
}

export default Cards
