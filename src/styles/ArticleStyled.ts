import styled from 'styled-components'

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0 0 2.5rem;
`

export const ArticleCard = styled.a`
  display: block;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.greyBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 88%;
  margin: 0.6rem auto;
  padding: 1.35rem 1.5rem;
  border-radius: 12px;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  @media (max-width: 900px) {
    width: 92%;
  }

  &:hover {
    @media (min-width: 901px) {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(99, 102, 241, 0.3);
      transform: translateY(-2px);
    }
  }

  h2 {
    font-size: 0.975rem;
    font-weight: 600;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.greyText};
    margin-bottom: 0.3rem;
  }

  span {
    display: block;
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.orangeText};
    font-weight: 500;
    margin-bottom: 0.5rem;
    opacity: 0.85;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.85rem;
    line-height: 1.65;
  }
`

export const ArticleContainer = styled.article`
  width: 88%;
  max-width: 680px;
  margin: 0 auto 3rem;
  padding: 0 0 1rem;

  @media (max-width: 900px) {
    width: 92%;
  }

  .back {
    display: inline-block;
    color: ${({ theme }) => theme.colors.orangeText};
    font-size: 0.8rem;
    text-decoration: none;
    margin: 1.2rem 0 1.5rem;
    opacity: 0.85;

    &:hover {
      opacity: 1;
    }
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.greyText};
    margin-bottom: 0.6rem;
  }

  .meta {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.orangeText};
    opacity: 0.85;
    margin-bottom: 1.2rem;
  }

  .lead {
    font-size: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textSubtle};
    line-height: 1.7;
    margin-bottom: 2rem;
    border-left: 2px solid ${({ theme }) => theme.colors.accent};
    padding-left: 1rem;
  }

  h2 {
    font-size: 1.15rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.greyText};
    margin: 2.2rem 0 1rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSubtle};
    margin-bottom: 1.2rem;
  }

  .note {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 0.82rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
`
