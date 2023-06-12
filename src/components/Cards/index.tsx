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
  link,
  file
}: {
  imagem: string
  titulo: string
  subtitulo?: string
  conteudo?: string
  scrollOn: boolean
  alt: string
  link?: string
  file?: string
}) {
  const card = React.useRef<HTMLHeadingElement>({} as HTMLHeadingElement)
  useAnimation(card, scrollOn)

  return (
    <ContainerCard ref={card}>
      <div className="image">
        <img src={imagem} alt={alt} />
      </div>
      <div>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        {conteudo
          ?.toString()
          .split('<br />')
          .map((cont) => (
            <>
              <p key={cont}>{cont}</p>
              <br />
            </>
          ))}
        {(link || file) && (
          <p>
            <a
              href={link || file}
              target="_blank"
              rel="noreferrer"
              download={file}
            >
              Clique Aqui
            </a>
          </p>
        )}
      </div>
    </ContainerCard>
  )
}

export default Cards
