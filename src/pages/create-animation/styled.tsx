import styled from 'styled-components';

export const ContainerCreateAnimation = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.colors.darkPurple};
  .leftSide {
    h2 {
      color: ${({ theme }) => theme.colors.green};
      font-size: ${({ theme }) => theme.font.sizes.medium};
      font-family: ${({ theme }) => theme.font.family.default};
    }
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    gap: 20px;
    label {
      height: 50%;
      width: 100%;
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.pink};
      font-family: ${({ theme }) => theme.font.family.default};
    }
    textarea {
      margin-top: 0.5rem;
      padding: 1rem;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.purple};
      border-radius: 10px;
      border: none;
      color: ${({ theme }) => theme.colors.green};
    }
  }
  .rightSide {
    width: 30%;
    background: ${({ theme }) => theme.colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
