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
      additionalMetaTags={[
        {
          name: 'keywords',
          content:
            'html, html5, css, css3, javascript, bootstrap, ui, ux, materialui, material, americaburger, america burguer, america, burguer, phoenix, phoenix app, victor.maya42@gmail.com,   figma, adobe, adobexd, wordpress, git, github dev, desenvolvedor, programador, programação, next, nextjs, reactjs, front-end, app, site, tecnologia, ufma, native, react native, implementação, acesso, maranhense, graduado, ciência, graduando, engenharia, computação, desenvolvedor, javascript, digital, portal, js, webinários, responsivo, desenvolvimento, react, pedreiras-ma, pedreiras, ma, maranhao, ui/ux, ui, ux, aplicativo, programação, implementado, dashboard, admin, desenvolvi, infográficos, dispositivo, smartphones, otimizou, implementando, html, html5, css, css3, javascript, bootstrap, ui, ux, materialui, material, americaburger, america burguer, america, burger, phoenix, phoenix app, victor.maya42@gmail.com, figma, adobe, adobexd, wordpress, git, github dev, developer, programmer, programming, next, nextjs, reactjs, front-end, app, website, technology, ufma, native, react native, implementation, access, maranhense, graduate, science, graduating, engineering, computing, developer, javascript, digital, portal, js, webinars, responsive, development, react, quarries-ma, quarries, ma, maranhao, ui/ux, ui, ux, application, programming, implemented, dashboard, admin, developed, infographics, device, smartphones, optimized, implementing',
        },
      ]}
    />
  );
}

export default HeadComponent;
