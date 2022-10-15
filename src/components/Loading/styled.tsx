import styled from 'styled-components'

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 10px ${({ theme }) => theme.colors.orangeText};
    border-top-color: #2b2b2b;
    animation: rotate 1s infinite;
    @keyframes rotate {
      to {
        transform: rotate(1turn);
      }
    }
  }
`
