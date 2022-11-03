import { NextSeoProps } from 'next-seo'

import myAge from './src/functions/MyAge'
import YearsExperience from './src/functions/YearsExperience'

export default {
  titleTemplate: 'Victor Maya | %s',
  defaultTitle: 'Victor Maya | Desencolvedor Front-End',
  description: `Tenho ${myAge()} anos, maranhense, graduado em Ciência e Tecnologia(UFMA). Sou desenvolvedor front-end com ${YearsExperience()} anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e NextJS. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital.`,
  canonical: 'https://victormayadev.com',
  openGraph: {
    title: 'Victor Maya | Desencolvedor Front-End',
    type: 'website',
    url: '',
    locale: 'pt_BR',
    site_name: 'Victor Maya',
    description: `Tenho ${myAge()} anos, maranhense, graduado em Ciência e Tecnologia(UFMA). Sou desenvolvedor front-end com ${YearsExperience()} anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e NextJS. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital.`,
    images: [
      {
        url: 'https://swnxabum.directus.app/assets/14b2d43d-f834-4eec-93db-e4c395c36ee2',
        alt: 'Victor Maya | Desencolvedor Front-End',
        height: 1200,
        width: 630
      }
    ]
  }
} as NextSeoProps
