import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "./layout/GlobalStyles";
import { MenuItemKey } from "./data";
import { ExampleActionBar } from "./actions/ExampleActionBar";
import SliderReset from "./layout/SliderReset";
import SVGChooser from "./SVGChooser";
import darkLogo from "../assets/saturnella_logo_export/160h/logo--dark.png"

const Window = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  min-width: 100%;
  background-color: ${props=>props.theme.colors.cinq};
  padding: 24px;
`;

const Stage = styled.div`
  background-color: ${props=>props.theme.colors.un};
  width: 100%;
  border: 12px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: radial-gradient(${props=>props.theme.colors.cinq}, ${props=>props.theme.colors.un});
`;


const InfoLine = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props=>props.theme.colors.cinq};
  padding-left: 48px;
`;

const Header = styled.h1`
  margin-right: 156px;
`;

const Info = styled.p`
  color: ${props=>props.theme.colors.primaryText};
`;

const SaturnElla = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;


export const App = () => {
  const [actionPanel, setActionPanel] = React.useState<any>({});
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<MenuItemKey>(
    ""
  );

  const [count, setCount] = React.useState<number>(0);


  const onClickClickMeButton = () => {
    setCount(count + 1);
    if (selectedMenuItem === "svg") {
      setSelectedMenuItem("");
    } else {
      setSelectedMenuItem("svg");
    }
  };

  let conditionalContent = '';
  return (
    <Window>
      <GlobalStyles />
      <SliderReset />
      <InfoLine>
        <Header>
          <img height="84" src={darkLogo}/>
        </Header>
        <Info>{conditionalContent}</Info>
      </InfoLine>
      <SaturnElla>
        <ExampleActionBar
          onClick={onClickClickMeButton}
          onOutputState={v => {
            setActionPanel({ sliderValue: v.sliderValue });
          }}
        />
        <Stage>
          <Info>nothing to see here.</Info>
        </Stage>
      </SaturnElla>
    </Window>
  );
};

export default App;
