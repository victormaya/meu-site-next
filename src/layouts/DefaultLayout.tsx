import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import profile from '../api/profile'
import { abas } from '../api/content'
import YearsExperience from '../functions/YearsExperience'
import { Container, Sidebar, MainContent, PageHeader } from './styled'

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { asPath } = useRouter()
  const currentAba = abas.find((a) =>
    a.path === '' ? asPath === '/' : `/${a.path}` === asPath
  )

  return (
    <Container>
      <Sidebar>
        <div className="profile-section">
          <div className="avatar-wrapper">
            <img src={profile.image} alt="Victor Maya" />
          </div>
          <div className="name">{profile.nome}</div>
          <span className="role">{profile.cargo}</span>
          <p className="bio">
            {profile.descricao.replace('YEARS', YearsExperience().toString())}
          </p>
        </div>

        <div className="divider" />

        <nav>
          {abas.map((aba) => {
            const href = aba.path === '' ? '/' : `/${aba.path}`
            const isActive =
              aba.path === '' ? asPath === '/' : asPath === `/${aba.path}`
            return (
              <Link
                href={href}
                key={aba.path || 'home'}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                {aba.title}
              </Link>
            )
          })}
        </nav>

        <div className="divider" />

        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
            GH
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            LI
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" title="WhatsApp">
            WA
          </a>
          <a href={`mailto:${profile.email}`} title="E-mail">
            @
          </a>
        </div>

        <a
          href="/cv.pdf"
          className="cv-button"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download CV
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} Victor Maya
        </span>
      </Sidebar>

      <MainContent>
        {currentAba && (
          <PageHeader>
            <h2>{currentAba.title}</h2>
          </PageHeader>
        )}
        {children}
      </MainContent>
    </Container>
  )
}

export default DefaultLayout
