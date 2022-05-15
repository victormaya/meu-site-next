const title = 'Victor Maya, Desenvolvedor Front-end';
const description =
  'Maranhense, graduado em Ciência e Tecnologia(UFMA), graduando em Engenharia da Computação(UFMA). Sou desenvolvedor front-end com 2 anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e Native. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital.';

export default {
  title,
  description,
  canonical: 'https://victormayadev.com',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://victormayadev.com',
    site_name: title,
    title,
    description,
    profile: { firstName: 'Victor Maya', lastName: 'Nascimento Almeida' },
  },
  images: [
    {
      url: 'https://victormayadev.com/_next/static/media/perfil.36a1485c.jpeg',
      alt: title,
      width: 424,
      height: 424,
    },
  ],
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
