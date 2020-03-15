import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "./layout/GlobalStyles";
import { MenuItemKey } from "./data";
import { ExampleActionBar } from "./actions/ActionBar";
import SliderReset from "./layout/SliderReset";
import SVGChooser from "./SVGChooser";

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

  const ENDNUMBER = 69;
  let conditionalContent =
    count != ENDNUMBER ? "This app is made by Hunter Kievet" : "blam";

  return (
    <Window>
      <GlobalStyles />
      <SliderReset />
      <InfoLine>
        <Header>Saturnella</Header>
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
          <StageItem scaleX={actionPanel.sliderValue}>
            <SVGChooser
              menuItem={selectedMenuItem}
              input1={actionPanel.sliderValue}
            />
          </StageItem>
        </Stage>
      </SaturnElla>
    </Window>
  );
};

export default App;
