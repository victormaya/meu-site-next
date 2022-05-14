import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  p {
    color: #ddd;
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    margin: 0;
    padding: 0;
    opacity: 0.5;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.family.default};
    position: relative;
    margin-left: calc(1rem + 5px);
  }
  .logo {
    background: ${({ theme }) => theme.colors.linearGradient};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    opacity: 1;
    margin-left: 5px;
  }
`;
