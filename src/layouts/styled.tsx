import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: calc(100vh - 4rem);
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: 970px) {
    overflow: auto;
    grid-template-columns: 1fr;
  }
  .animaLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animaLeft 0.5s forwards;
  }
  @keyframes animaLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  .visible {
    opacity: 1;
    transform: initial;
  }
`;

export const ContentLeft = styled.section`
  padding: 4rem 2rem;
  @media (max-width: 970px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.family.default};
  overflow: auto;
  .perfil {
    width: 13rem;
    margin-bottom: 1rem;
    img {
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.linearGradient};
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      opacity: 1;
      bottom: -0.4rem;
      left: -0.5rem;
      z-index: -1;
      transition: all 0.3s ease;
    }
  }
  .perfil:hover,
  .perfil:focus {
    position: relative;
    img {
      z-index: 2;
      border-radius: 5px;
    }
    &:after {
      border-radius: 5px;
      opacity: 1;
    }
  }
  .textos {
    padding-left: 2rem;
    h1 {
      color: ${({ theme }) => theme.colors.orangeText};
      font-size: ${({ theme }) => theme.font.sizes.large};
      line-height: 2;
      font-family: ${({ theme }) => theme.font.family.custom};
      background-image: ${({ theme }) => theme.colors.linearGradient};
      background-clip: text;
      -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
      -webkit-text-fill-color: transparent;
    }
    p {
      color: ${({ theme }) => theme.colors.greyText};
      line-height: 1.3;
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  }
`;

export const ContentRight = styled.section`
  padding: 4rem 2rem;
  @media (max-width: 970px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.default};
`;
