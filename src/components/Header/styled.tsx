import styled from 'styled-components'

export const ContainerHeader = styled.header`
  color: ${({ theme }) => theme.colors.orangeText};
  nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  a {
    color: ${({ theme }) => theme.colors.greyText};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    position: relative;
    font-weight: bold;
    z-index: 1;
    :hover {
      color: ${({ theme }) => theme.colors.orangeText};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.orangeText};
    z-index: 1;
    /* &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      background: ${({ theme }) => theme.colors.linearGradient};
      position: absolute;
      border-radius: 50%;
      bottom: -5px;
      left: -5px;
      animation: surgeMark 0.5s forwards, roundMark 0.5s 0.25s forwards;
      z-index: -1;
      opacity: 0.7;
      transform: scale(0);
    }
    @keyframes surgeMark {
      to {
        transform: initial;
      }
    }
    @keyframes roundMark {
      to {
        border-radius: 3px;
      }
    } */
  }
`
