import React from 'react';
import myAge from '../../functions/MyAge';
import { NextSeo } from 'next-seo';
import Router from 'next/router';

function HeadComponent({ title }: { title: string }) {
  const [url, setUrl] = React.useState('');
  const titleToView = `Victor Maya |${title}`;
  const descriptionToView = `Tenho ${myAge()} anos, maranhense, graduado em Ciência e Tecnologia(UFMA), graduando em Engenharia da Computação(UFMA). Sou desenvolvedor front-end com 2 anos de experiência. Trabalho com JavaScript, lidando diariamente com ReactJs e Native. Sou apaixonado por tecnologia, viagens e música. Vivo entre o analógico e o digital. Página: ${title}`;

  React.useEffect(() => {
    const generatedURL = `https://victormayadev.com${Router.pathname}`;
    console.log(generatedURL);
    setUrl(generatedURL);
  }, []);

  return (
    <NextSeo
      title={titleToView}
      description={descriptionToView}
      canonical={url}
      openGraph={{ url, title: titleToView }}
    />
  );
}

export default HeadComponent;
