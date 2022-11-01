import myAge from './src/functions/MyAge'
import YearsExperience from './src/functions/YearsExperience'

const description = `Tenho ${myAge()} anos, maranhense, graduado em Ciência e Tecnologia(UFMA). Sou desenvolvedor front-end com ${YearsExperience()} anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e NextJS. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital.`

export default {
  titleTemplate: 'Victor Maya | %s',
  description,
  canonical: 'https://victormayadev.com',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://victormayadev.com',
    site_name: 'Victor Maya | %s',
    title: 'Victor Maya | %s',
    description,
    profile: { firstName: 'Victor Maya', lastName: 'Nascimento Almeida' },
    images: [
      {
        url: 'https://swnxabum.directus.app/assets/14b2d43d-f834-4eec-93db-e4c395c36ee2',
        alt: 'Victor Maya | %s',
        width: 424,
        height: 424,
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
}
