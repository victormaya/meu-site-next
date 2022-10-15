import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { ContainerHeader } from './styled'

function Header() {
  const { asPath } = useRouter()

  return (
    <ContainerHeader>
      <nav>
        <Link href="/skills">
          <a href="skills" className={asPath === '/skills' ? 'active' : ''}>
            Skills
          </a>
        </Link>{' '}
        |
        <Link href="/experiencia">
          <a
            href="experiencia"
            className={asPath === '/experiencia' ? 'active' : ''}
          >
            {' '}
            Experiência
          </a>
        </Link>{' '}
        |
        <Link
          href="/portifolio"
          className={asPath === '/portifolio' ? 'active' : ''}
        >
          <a
            href="portifolio"
            className={asPath === '/portifolio' ? 'active' : ''}
          >
            {' '}
            Portifólio
          </a>
        </Link>{' '}
        |
        <Link href="/contato" className={asPath === '/contato' ? 'active' : ''}>
          <a href="contato" className={asPath === '/contato' ? 'active' : ''}>
            {' '}
            Contato
          </a>
        </Link>
      </nav>
    </ContainerHeader>
  )
}

export default Header
