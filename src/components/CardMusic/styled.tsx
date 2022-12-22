import styled from 'styled-components'

export const ContainerCard = styled.div<{ percent: number }>`
  transform: translateX(20px);

  background: rgba(221, 221, 221, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  width: 80%;
  display: flex;
  align-items: center;
  @media (max-width: 970px) {
    grid-template-columns: 1fr;
  }
  justify-content: space-around;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover {
    @media (min-width: 971px) {
      transform: scale(1.05);
    }
  }
  &:last-child {
    margin-bottom: 10rem;
    @media (max-width: 970px) {
      margin-bottom: 0;
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 0.5rem;
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
  button {
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: relative;
      left: 3px;
    }
    .pause {
      left: initial;
    }
  }
  .title-progress {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  input[type='range'] {
    -webkit-appearance: none;
    margin-right: 15px;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.greyText};
    border-radius: 5px;
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.orangeText},
      ${({ theme }) => theme.colors.orangeText}
    );
    background-size: calc(${(props) => props.percent}% + 1px) 100%;
    background-repeat: no-repeat;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orangeText};
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`
