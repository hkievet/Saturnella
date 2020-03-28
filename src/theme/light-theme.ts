import { DefaultTheme } from "styled-components";
import logoLight from '../assets/saturnella_logo_export/160h/logo--light.png'
import planetLight from '../assets/saturnella_logo_export/1080h/planet--light.png'

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',
  logoImage:logoLight,
  planetImage: planetLight,
  colors: {
    un: "white",
    deux: "gray",
    trois: "gray",
    quatre: "light-gray",
    cinq: "#FCD7CC",
    primaryText: "black",
    primaryBackground: "white",
    secondaryText: "white",
    secondaryBackground: "black",
  }
}
