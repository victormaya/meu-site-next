import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .visible {
    opacity: 1 !important;
    transform: none !important;
  }
`

export const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem 1.25rem 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.font.family.default};
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    position: relative;
    height: auto;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem 1.25rem;
    flex-direction: column;
  }

  /* ── Seção de perfil ── */
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    text-align: center;
    margin-bottom: 0.25rem;

    @media (max-width: 900px) {
      flex-direction: row;
      text-align: left;
      align-items: center;
      gap: 0.85rem;
    }
  }

  .avatar-wrapper {
    position: relative;
    width: 86px;
    height: 86px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 18px;
      position: relative;
      z-index: 1;
      display: block;
    }

    &::before {
      content: '';
      position: absolute;
      inset: -2.5px;
      border-radius: 21px;
      background: ${({ theme }) => theme.colors.linearGradient};
      z-index: 0;
    }

    @media (max-width: 900px) {
      width: 46px;
      height: 46px;
      border-radius: 12px;

      &::before {
        border-radius: 14px;
      }

      img {
        border-radius: 12px;
      }
    }
  }

  .name {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyText};
    line-height: 1.2;
  }

  .role {
    display: inline-flex;
    align-self: center;
    font-size: 0.65rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orangeText};
    background: ${({ theme }) => theme.colors.accentMuted};
    border: 1px solid rgba(99, 102, 241, 0.22);
    padding: 0.18rem 0.6rem;
    border-radius: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media (max-width: 900px) {
      align-self: flex-start;
    }
  }

  .bio {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.65;
    text-align: center;

    @media (max-width: 900px) {
      display: none;
    }
  }

  /* ── Divisor ── */
  .divider {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
    margin: 1.25rem 0;
    flex-shrink: 0;

    @media (max-width: 900px) {
      display: none;
    }
  }

  /* ── Navegação ── */
  nav {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;

    @media (max-width: 900px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin: 0.75rem 0 0;
    }
  }

  .nav-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.55rem 0.85rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.greyBg};
      color: ${({ theme }) => theme.colors.greyText};
    }

    &.active {
      background: ${({ theme }) => theme.colors.accentMuted};
      color: ${({ theme }) => theme.colors.orangeText};
      font-weight: 600;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        height: 60%;
        width: 3px;
        background: ${({ theme }) => theme.colors.orangeText};
        border-radius: 0 3px 3px 0;
      }
    }

    @media (max-width: 900px) {
      padding: 0.3rem 0.65rem;
      font-size: 0.78rem;
      border-radius: 6px;

      &.active::before {
        display: none;
      }
    }
  }

  /* ── Links sociais ── */
  .social-links {
    display: flex;
    justify-content: center;
    gap: 0.45rem;
    margin-bottom: 0.85rem;

    @media (max-width: 900px) {
      display: none;
    }

    a {
      width: 32px;
      height: 32px;
      border-radius: 7px;
      background: ${({ theme }) => theme.colors.greyBg};
      border: 1px solid ${({ theme }) => theme.colors.border};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: 0.6rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.font.family.default};
      letter-spacing: 0.01em;
      transition: all 0.18s;

      &:hover {
        background: ${({ theme }) => theme.colors.accentMuted};
        color: ${({ theme }) => theme.colors.orangeText};
        border-color: rgba(99, 102, 241, 0.35);
      }
    }
  }

  /* ── Botão CV ── */
  .cv-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.linearGradient};
    color: white;
    font-size: 0.78rem;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.18s;
    font-family: ${({ theme }) => theme.font.family.default};
    letter-spacing: 0.02em;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
      transform: translateY(-1px);
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  /* ── Copyright ── */
  .copyright {
    margin-top: auto;
    padding-top: 1.25rem;
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 0.4;
    text-align: center;

    @media (max-width: 900px) {
      display: none;
    }
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  font-family: ${({ theme }) => theme.font.family.default};

  @media (max-width: 900px) {
    height: auto;
    overflow: visible;
  }
`

export const PageHeader = styled.div`
  padding: 1.75rem 2rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyText};
    line-height: 1;
  }

  @media (max-width: 900px) {
    padding: 1.25rem 1.25rem 1rem;
  }
`

/* mantido para compatibilidade com imports legados */
export const ContentLeft = styled.section``
export const ContentRight = styled.section``
