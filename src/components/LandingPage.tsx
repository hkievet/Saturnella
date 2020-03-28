import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "./layout/GlobalStyles";
import { MenuItemKey } from "./data";
import { ExampleActionBar } from "./actions/ActionBar";
import SliderReset from "./layout/SliderReset";
import SVGChooser from "./SVGChooser";
import darkLogo from "../assets/saturnella_logo_export/160h/logo--dark.png"

const Window = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  min-width: 100%;
  background-color: #9999cc;
  padding: 24px;
`;

const Stage = styled.div`
  background-color: #cc99cc;
  width: 100%;
  border: 12px solid black;
  border-top: none;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: radial-gradient(black, #cc99cc);
`;

interface ICustomSVG {
  scaleX?: number;
  scaleY?: number;
  opacity?: number;
}

const StageItem = styled.svg<ICustomSVG>`
  background-color: white;
  height: 280px;
  width: 280px;
  border: 12px solid black;
  opacity: ${props => {
    return props.opacity / 100;
  }};
  transform: ${props => {
    const scaleX = props.scaleX ? "scaleX(" + props.scaleX / 100 + ")" : "";
    const scaleY = props.scaleY ? "scaleY(" + props.scaleY / 100 + ")" : "";
    return [scaleX, scaleY].join(" ");
  }};
`;
const InfoLine = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  border-bottom: 6px solid black;
  padding-left: 48px;
`;
const Header = styled.h1`
  margin-right: 156px;
`;
const Info = styled.p``;
const SaturnElla = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

import Ppl from "./queries/ppl";
import CreatePpl from "./queries/CreatePpl";

export const App = () => {
  const [actionPanel, setActionPanel] = React.useState<any>({});
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<MenuItemKey>(
    ""
  );

  const [count, setCount] = React.useState<number>(0);

  const apps = {
    "createppl": CreatePpl
  }

  const onClickClickMeButton = () => {
    setCount(count + 1);
    if (selectedMenuItem === "svg") {
      setSelectedMenuItem("");
    } else {
      setSelectedMenuItem("svg");
    }
  };

  let conditionalContent = <Ppl />;
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
          <CreatePpl />
        </Stage>
      </SaturnElla>
    </Window>
  );
};

export default App;
