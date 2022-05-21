import styled from 'styled-components';

const ContainerViewAnimation = styled.div`
  width: 300px;
  height: 533.33px;
  background: ${({ theme }) => theme.colors.darkPurple};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      color: ${({ theme }) => theme.colors.green};
      :hover {
        text-decoration: underline;
      }
    }
  }
  .view {
    height: 100%;
    margin-top: 14px;
    margin-bottom: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .box {
    height: 100px;
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    .bar {
      background: ${({ theme }) => theme.colors.pink};
      height: 14px;
      border-radius: 5px 5px 0 0;
      display: flex;
      gap: 3px;
      align-items: center;
      padding: 3px;
      div {
        border-radius: 50%;
        height: 8px;
        width: 8px;
        background: ${({ theme }) => theme.colors.purple};
        :first-child {
          background: #fff;
        }
        :last-child {
          background: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
  .boxGear {
    margin-top: 26px;
    height: 26px;
  }
`;

export default ContainerViewAnimation;
