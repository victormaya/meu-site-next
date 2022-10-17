import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { ContainerHeader } from './styled'

function Header() {
  const { asPath } = useRouter()
  const [tabs, setTabs] = useState(
    [] as {
      title: string
      path: string
    }[]
  )

  async function getTabs() {
    await fetch('https://swnxabum.directus.app/items/abas')
      .then(async (response) => {
        const { data }: { data: { title: string; path: string }[] } =
          await response.json()
        setTabs(data)
      })
      .catch(() => {
        // fazer o catch com Swal
      })
  }

  useEffect(() => {
    getTabs()
  }, [])

  return (
    <ContainerHeader>
      <nav>
        {tabs.map((item) => (
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
