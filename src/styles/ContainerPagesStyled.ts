import styled from 'styled-components'

export const ContainerDefaultPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 70vh;
  width: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 970px) {
    height: auto;
  }
`
