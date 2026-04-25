import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

import YearsExperience from '../functions/YearsExperience'

const sections = [
  {
    title: 'Skills',
    path: '/skills',
    desc: '15 tecnologias',
    sub: 'TypeScript · React · Next.js · Tailwind e mais',
  },
  {
    title: 'Experiência',
    path: '/experiencia',
    desc: `${YearsExperience()}+ anos de mercado`,
    sub: 'Da graduação na UFMA ao Front-End Sênior',
  },
  {
    title: 'Portfólio',
    path: '/portifolio',
    desc: '3 projetos em destaque',
    sub: 'Visita Ambev · Phoenix App · Rimas Raras',
  },
  {
    title: 'Contato',
    path: '/contato',
    desc: 'Vamos conversar',
    sub: 'WhatsApp · LinkedIn · E-mail · GitHub',
  },
  {
    title: 'Currículo',
    path: '/curriculo',
    desc: 'PDF atualizado',
    sub: 'Histórico completo para download',
  },
]

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 2.5rem 2rem;
  overflow-y: auto;

  @media (max-width: 900px) {
    padding: 2rem 1.25rem;
    justify-content: flex-start;
  }
`

const Greeting = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orangeText};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  opacity: 0.8;
`

const Title = styled.h1`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.greyText};
  margin-bottom: 0.9rem;

  span {
    background: ${({ theme }) => theme.colors.linearGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const Tagline = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  max-width: 440px;
  margin-bottom: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  gap: 0.65rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

const NavCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.1rem 1.2rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.greyBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  transition: background 0.18s, border-color 0.18s, transform 0.18s;

  &:hover {
    background: ${({ theme }) => theme.colors.accentMuted};
    border-color: rgba(99, 102, 241, 0.35);
    transform: translateY(-2px);
  }

  .card-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyText};
    margin-bottom: 0.1rem;
  }

  .card-desc {
    font-size: 0.73rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orangeText};
  }

  .card-sub {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.45;
    margin-top: 0.15rem;
  }
`

const Sep = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 2rem 0 0;
`

function Home() {
  return (
    <>
      <Head>
        <title>Victor Maya | Desenvolvedor Front-End Sênior</title>
        <meta
          name="description"
          content="Portfólio de Victor Maya — Desenvolvedor Front-End Sênior especializado em React, TypeScript e Next.js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeWrapper>
        <Greeting>Bem-vindo ao meu portfólio</Greeting>
        <Title>
          Código que <span>funciona.</span>
          <br />
          Interfaces que <span>encantam.</span>
        </Title>
        <Tagline>
          {YearsExperience()}+ anos construindo produtos digitais com React,
          TypeScript e Next.js. Explore as seções abaixo.
        </Tagline>

        <Grid>
          {sections.map((s) => (
            <NavCard href={s.path} key={s.path}>
              <span className="card-title">{s.title}</span>
              <span className="card-desc">{s.desc}</span>
              <span className="card-sub">{s.sub}</span>
            </NavCard>
          ))}
        </Grid>

        <Sep />
      </HomeWrapper>
    </>
  )
}

export default Home
