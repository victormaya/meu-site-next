import styled from 'styled-components'

export const ContainerDefaultPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    height: auto;
    overflow: visible;
  }
`
