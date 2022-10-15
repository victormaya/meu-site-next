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
    color: #ddd;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    position: relative;
    font-weight: bold;
    z-index: 1;
  }
  .active {
    z-index: 1;
    &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      background: ${({ theme }) => theme.colors.linearGradient};
      position: absolute;
      border-radius: 50%;
      bottom: -5px;
      left: -5px;
      animation: surgeMark 1s forwards;
      z-index: -1;
      opacity: 0.7;
    }
    @keyframes surgeMark {
      to {
        border-radius: 3px;
      }
    }
  }
`
