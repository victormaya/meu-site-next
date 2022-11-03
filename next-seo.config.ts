import { NextSeoProps } from 'next-seo'

import myAge from './src/functions/MyAge'
import YearsExperience from './src/functions/YearsExperience'

export default {
  titleTemplate: 'Victor Maya | %s',
  defaultTitle: 'Victor Maya | Dev',
  description: `Tenho ${myAge()} anos, maranhense, graduado em Ciência e Tecnologia(UFMA). Sou desenvolvedor front-end com ${YearsExperience()} anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e NextJS. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital.`,
  canonical: 'https://victormayadev.com',
  openGraph: {
    title: 'Victor Maya | Dev',
    type: 'website',
    url: '',
    locale: 'pt_BR',
    site_name: 'Victor Maya',
    description: `Tenho ${myAge()} anos, maranhense, graduado em Ciência e Tecnologia(UFMA). Sou desenvolvedor front-end com ${YearsExperience()} anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e NextJS. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital.`,
    images: [
      {
        url: 'https://victormayadev.com',
        alt: 'Victor Maya | Dev',
        height: 1200,
        width: 630
      }
    ]
  }
} as NextSeoProps

// import { NextSeoProps } from 'next-seo';

// export default {
//   titleTemplate: 'Boilerplate | %s',
//   // defaultTitle: 'Boilerplate | Boilerplate do Alquipo Neto',
//   description: 'Boilerplate pronto para usar em projetos NEXT',
//   canonical: 'https://github.com/Alquipo/boilerplate',
//   openGraph: {
//     title: 'Boilerplate | Boilerplate do Alquipo Neto',
//     type: 'website',
//     url: 'https://github.com/Alquipo/boilerplate',
//     locale: 'pt_BR',
//     site_name: 'Boilerplate',
//     description: 'Boilerplate pronto para usar em projetos NEXT',
//     images: [
//       {
//         url: '/img/nextjs-logo.svg',
//         alt: 'Boilerplate pronto para usar em projetos NEXT',
//         height: 1200,
//         width: 630,
//       },
//     ],
//   },
//   twitter: {
//     handle: '@alquiponeto',
//     site: '@site',
//     cardType: 'summary_large_image',
//   },
// } as NextSeoProps;
