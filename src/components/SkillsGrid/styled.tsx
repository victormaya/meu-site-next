import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 0.65rem;
  padding: 1.75rem 1.5rem 3rem;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    padding: 1.25rem 1rem 2rem;
  }
`

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  padding: 1rem 0.75rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.greyBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.colors.accentMuted};
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-3px);
  }

  .skill-icon {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  span {
    font-size: 0.7rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSubtle};
    text-align: center;
    line-height: 1.3;
    font-family: ${({ theme }) => theme.font.family.default};
  }
`
