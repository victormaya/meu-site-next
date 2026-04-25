// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      linearGradient: string
      greyText: string
      orangeText: string
      greyBg: string
      accent: string
      accentMuted: string
      border: string
      textMuted: string
      textSubtle: string
    }
    font: {
      family: {
        default: string
        custom: string
      }
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
      }
    }
  }
}
