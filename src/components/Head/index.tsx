import React, { useContext } from 'react'

import { NextSeo } from 'next-seo'
import Router from 'next/router'

import { HomeContext } from '../../context/homeContext'
import MyAge from '../../functions/MyAge'
import YearsExperience from '../../functions/YearsExperience'

function HeadComponent({ title }: { title: string }) {
  const { dataHome } = useContext(HomeContext)

  const [url, setUrl] = React.useState('')
  const descriptionToView = dataHome.descricao
    ?.replace('AGE', MyAge().toString())
    .replace('YEARS', YearsExperience().toString())

  React.useEffect(() => {
    const generatedURL = `https://victormayadev.com${Router.pathname}`
    setUrl(generatedURL)
  }, [])

  return (
    <NextSeo
      title={title}
      description={descriptionToView}
      canonical={url}
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://victormayadev.com',
        site_name: title,
        title: `Victor Maya | ${title}`,
        description: descriptionToView,
        profile: { firstName: 'Victor Maya', lastName: 'Nascimento Almeida' },
        images: [
          {
            url: 'https://swnxabum.directus.app/assets/14b2d43d-f834-4eec-93db-e4c395c36ee2',
            alt: `Victor Maya | ${title}`,
            width: 424,
            height: 424,
            type: 'image/jpeg'
          }
        ]
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content:
            'html, html5, css, css3, javascript, bootstrap, ui, ux, materialui, material, americaburger, america burguer, america, burguer, phoenix, phoenix app, victor.maya42@gmail.com,   figma, adobe, adobexd, wordpress, git, github dev, desenvolvedor, programador, programação, next, nextjs, reactjs, front-end, app, site, tecnologia, ufma, native, react native, implementação, acesso, maranhense, graduado, ciência, graduando, engenharia, computação, desenvolvedor, javascript, digital, portal, js, webinários, responsivo, desenvolvimento, react, pedreiras-ma, pedreiras, ma, maranhao, ui/ux, ui, ux, aplicativo, programação, implementado, dashboard, admin, desenvolvi, infográficos, dispositivo, smartphones, otimizou, implementando, html, html5, css, css3, javascript, bootstrap, ui, ux, materialui, material, americaburger, america burguer, america, burger, phoenix, phoenix app, victor.maya42@gmail.com, figma, adobe, adobexd, wordpress, git, github dev, developer, programmer, programming, next, nextjs, reactjs, front-end, app, website, technology, ufma, native, react native, implementation, access, maranhense, graduate, science, graduating, engineering, computing, developer, javascript, digital, portal, js, webinars, responsive, development, react, quarries-ma, quarries, ma, maranhao, ui/ux, ui, ux, application, programming, implemented, dashboard, admin, developed, infographics, device, smartphones, optimized, implementing'
        }
      ]}
    />
  )
}

export default HeadComponent
