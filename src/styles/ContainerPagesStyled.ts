import styled from 'styled-components'

export const ContainerDefaultPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 80vh;
  width: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`
