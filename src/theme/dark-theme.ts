import logoDark from '../assets/saturnella_logo_export/160h/logo--dark.png'
import { DefaultTheme} from "styled-components";
import planetLight from '../assets/saturnella_logo_export/1080h/planet--dark.png'

// DARK THEME
export const darkTheme: DefaultTheme = {
  borderRadius: "2px",
  logoImage: logoDark,
  planetImage: planetLight,
  colors: {
    un: "#cc99cc",
    deux: "#3e7e7f",
    trois: "black",
    quatre: "black",
    cinq: "black",
    primaryText: "white",
    primaryBackground: "black",
    secondaryText: "black",
    secondaryBackground: "white",
  }

}