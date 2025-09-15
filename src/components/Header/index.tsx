import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { abas } from '../../api/content'
import { ContainerHeader } from './styled'

function Header() {
  const { asPath } = useRouter()

  return (
    <ContainerHeader>
      <nav>
        {abas.map((item) => (
          <Link
            href={`/${item.path}`}
            key={item.title}
            className={asPath === `/${item.path}` ? 'active' : ''}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </ContainerHeader>
  )
}

export default Header
