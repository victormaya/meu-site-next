import React from 'react'
import { NextSeo } from 'next-seo'

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'
import { ArticleList, ArticleCard } from '../../styles/ArticleStyled'

const articles = [
  {
    slug: 'o-preco-do-pertencimento',
    title: 'O preço do pertencimento',
    date: '5 de novembro de 2026',
    excerpt:
      'Um eleitor de direita explica por que cansou de defender tudo o que vem do próprio lado — e por que isso não o levou para o outro.'
  }
]

function Artigos() {
  return (
    <ContainerDefaultPage>
      <NextSeo title="Artigos" noindex nofollow />
      <ArticleList>
        {articles.map((article) => (
          <ArticleCard key={article.slug} href={`/artigos/${article.slug}`}>
            <h2>{article.title}</h2>
            <span>{article.date}</span>
            <p>{article.excerpt}</p>
          </ArticleCard>
        ))}
      </ArticleList>
    </ContainerDefaultPage>
  )
}

export default Artigos
