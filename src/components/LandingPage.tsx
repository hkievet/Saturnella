import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "./layout/GlobalStyles";
import SVGMaker from "./SVGMaker";
import { MenuItemKey } from "./data";

const Window = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  min-width: 100%;
  background-color: #9999cc;
  padding: 24px;
`;
const ActionBar = styled.div`
  background-color: #cc99cc;
  min-width: 288px;
  display: flex;
  flex-direction: column;
  border: 14px solid black;
  margin-right: 24px;
`;
const ActionPanel = styled.div`
  background-color: #3e7e7f;
  display: flex;
  margin: 24px;
  border: 10px black solid;
`;
const Action = styled.button`
  width: 156px;
  height: 48px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  font-size: 18px;
  margin: 24px auto;
  border-radius: 24px;
  padding-top: 8px; //offsets stupid spartan <flex-direction className=""></flex-direction>
  border: 6px solid black;
  transition: 1s;
  &:focus {
    border: double;
  }
  &:hover {
    transition: none;
    cursor: pointer;
    border: dashed 2px;
  }
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
const StageItem = styled.svg`
  background-color: white;
  height: 280px;
  width: 280px;
  border: 12px solid black;
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
  if (count == ENDNUMBER + 1) {
    while (true) {}
  }

  let conditionalContent =
    count == ENDNUMBER
      ? "OKAY LAST CHANCE!!.....  Are you sure you want to click that again?"
      : count >= ENDNUMBER - 1
      ? "1!"
      : count >= ENDNUMBER - 2
      ? "2!"
      : count >= ENDNUMBER - 3
      ? "3!"
      : count >= ENDNUMBER - 10
      ? "You have 10 more clicks..."
      : count >= 25
      ? "..."
      : count >= 23
      ? "Europe travel banned for 30 days.  Coronavirus.  2020."
      : count >= 20
      ? "Okay, demo is over...."
      : count >= 15
      ? "Thanks for testing the demo!"
      : "This app is made by Hunter Kievet";

  return (
    <Window>
      <GlobalStyles />
      <InfoLine>
        <Header>Saturnella</Header>
        <Info>{conditionalContent}</Info>
      </InfoLine>
      <SaturnElla>
        <ActionBar>
          <ActionPanel>
            <Action onClick={onClickClickMeButton}>Mr Click</Action>
          </ActionPanel>
        </ActionBar>
        <Stage>
          <StageItem>
            <SVGMaker menuItem={selectedMenuItem} />
          </StageItem>
        </Stage>
      </SaturnElla>
    </Window>
  );
};

export default App;
