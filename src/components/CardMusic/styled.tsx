import styled from 'styled-components'

export const ContainerCard = styled.div`
  /* para animacao */
  opacity: 0;
  transform: translateX(20px);
  /* para animacao */
  @media (max-width: 970px) {
    /* nao ter animação no mobile de sumir e apaercer */
    opacity: 1;
    transform: initial;
  }
  background: ${({ theme }) => theme.colors.greyBg};
  width: 80%;
  display: flex;
  align-items: center;
  @media (max-width: 970px) {
    grid-template-columns: 1fr;
  }
  justify-content: space-around;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover {
    @media (min-width: 971px) {
      transform: scale(1.05);
    }
  }
  &:last-child {
    margin-bottom: 10rem;
    @media (max-width: 970px) {
      margin-bottom: 0;
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    /* background-image: linear-gradient(
      90deg,
      rgba(187, 50, 53, 1) 0%,
      rgba(255, 187, 17, 1) 10%
    ); */
    color: ${({ theme }) => theme.colors.orangeText};
    /* background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
  button {
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: relative;
      left: 3px;
    }
    .pause {
      left: initial;
    }
  }
  .title-progress {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  progress {
    border-radius: 7px;
    width: 100%;
    height: 5px;
  }
  progress::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.greyText};
    border-radius: 8px;
  }
  progress::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.orangeText};
    border-radius: 7px;
  }
  progress::-moz-progress-bar {
    /* style rules */
  }
`
