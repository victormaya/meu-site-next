import React, { useEffect, useState } from 'react'

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
          <Link href={`/${item.path}`} key={item.title}>
            <a
              href={item.title}
              className={asPath === `/${item.path}` ? 'active' : ''}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </nav>
    </ContainerHeader>
  )
}

export default Header
