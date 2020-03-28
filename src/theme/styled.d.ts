import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    logoImage: string
    planetImage: string
    borderRadius: string
    // French names for our colors becaus this is DESIG
    colors: {
      // primary and secondary are text/background colorss for contrast.
      primaryText: string
      primaryBackground: string
      secondaryText: string
      secondaryBackground: string
      // stage color, action bar
      un: string
      // actions
      deux: string
      // ?
      trois: string
      // ?
      quatre: string
      // background color
      cinq: string
    }
  }
}