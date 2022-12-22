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

  background: rgba(221, 221, 221, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  width: 80%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  @media (max-width: 970px) {
    grid-template-columns: 1fr;
  }
  align-items: center;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.5s ease;
  .image {
    width: 6rem;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    margin-right: 1rem;
    @media (max-width: 970px) {
      margin: 0 auto;
      margin-bottom: 2rem;
    }
    img {
      background: ${({ theme }) => theme.colors.greyText};
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.linearGradient};
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      bottom: -0.3rem;
      left: -0.4rem;
      z-index: -1;
      transition: all 0.3s ease;
    }
  }
  &:hover {
    @media (min-width: 971px) {
      transform: scale(1.05);
    }
    img {
      border-radius: 6px;
    }
    .image:after {
      border-radius: 4px;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: bold;
    line-height: 1.1;
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
  h3 {
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.greyText};
    font-weight: bold;
    line-height: 2;
  }
  p {
    color: ${({ theme }) => theme.colors.greyText};
    line-height: 1.5rem;
  }
  &:last-child {
    margin-bottom: 10rem;
    @media (max-width: 970px) {
      margin-bottom: 0;
    }
  }
`
