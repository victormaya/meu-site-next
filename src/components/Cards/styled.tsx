import styled from 'styled-components'

export const ContainerCard = styled.div`
  /* animação de entrada */
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.35s ease, transform 0.35s ease, background 0.2s,
    border-color 0.2s;

  @media (max-width: 900px) {
    opacity: 1;
    transform: none;
  }

  background: ${({ theme }) => theme.colors.greyBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 88%;
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 1.25rem;
  align-items: flex-start;
  margin: 0.6rem auto;
  padding: 1.35rem 1.5rem;
  border-radius: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 92%;
    gap: 0.75rem;
  }

  &:hover {
    @media (min-width: 901px) {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(99, 102, 241, 0.3);
      transform: translateY(-2px) !important;
    }
  }

  .image {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    @media (max-width: 900px) {
      width: 40px;
      height: 40px;
    }
  }

  h2 {
    font-size: 0.975rem;
    font-weight: 600;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.greyText};
    margin-bottom: 0.2rem;
  }

  h3 {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.orangeText};
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    opacity: 0.85;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.85rem;
    line-height: 1.65;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 0.9rem;
    color: ${({ theme }) => theme.colors.orangeText};
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(99, 102, 241, 0.3);
    padding: 0.35rem 0.85rem;
    border-radius: 6px;
    transition: all 0.18s;
    font-family: ${({ theme }) => theme.font.family.default};

    &:hover {
      background: ${({ theme }) => theme.colors.accentMuted};
      border-color: ${({ theme }) => theme.colors.orangeText};
    }

    &::after {
      content: '→';
    }
  }

  &:last-child {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 900px) {
    h3,
    h2,
    p {
      text-align: left;
    }
  }
`
