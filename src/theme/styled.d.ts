import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    logoImage: string
    borderRadius: string
    
    // French names for our colors becaus this is DESIG
    colors: {
      un: string
      deux: string
      trois: string
      quatre: string
      cinq: string
    }
  }
}