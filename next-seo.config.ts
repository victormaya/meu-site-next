import { NextSeoProps } from 'next-seo'

import YearsExperience from './src/functions/YearsExperience'

const title = 'Victor Maya | Desenvolvedor Front-End'
const description = `Olá, sou Victor Maya, um desenvolvedor front-end pleno com ${YearsExperience()}+ anos de experiência em JavaScript, ReactJS e NextJS. Graduado em Ciência e Tecnologia pela UFMA, sou apaixonado por tecnologia, viagens e música. Atualizado nas últimas tendências do desenvolvimento front-end, estou pronto para colaborar em projetos desafiadores e transformar ideias em realidade. Vivo entre o analógico e o digital.`

export default {
  title,
  titleTemplate: 'Victor Maya | %s',
  defaultTitle: 'Victor Maya | Desenvolvedor Front-End',
  description,
  canonical: 'https://victormayadev.com',
  openGraph: {
    title: 'Victor Maya | Desenvolvedor Front-End',
    type: 'website',
    url: '',
    locale: 'pt_BR',
    site_name: 'Victor Maya',
    description,
    images: [
      {
        url: 'https://swnxabum.directus.app/assets/14b2d43d-f834-4eec-93db-e4c395c36ee2',
        alt: 'Victor Maya | Desenvolvedor Front-End',
        height: 1200,
        width: 630
      }
    ]
  }
} as NextSeoProps
