import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    logoImage: string
    borderRadius: string
    
    colors: {
      main: string
      secondary: string
    }
  }
}