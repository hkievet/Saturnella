import * as React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import VerticalBarSVG from "../layout/VerticalBarSVG";
import ContainerBody from "../layout/ContainerBody";
import HeaderContainer from "../layout/HeaderContainer";
import GlobalStyles from "../layout/GlobalStyles";
import Globs from "../hksvg/WeirdRotateAnimation";
import SvgSelectionMenu from "../hksvg/SvgSelectionMenu";

const AppContainer = styled.div``;

export const App = () => {
  const [isTriggered, setIsTriggered] = React.useState(false);
  const toggleMe = () => {
    setIsTriggered(!isTriggered);
  };

  const Window = styled.div`
    flex-direction: row;
    display: flex;
    height: 100%;
    min-width: 100%;
    background-color: #65c8d0;
    padding: 24px;
  `;
  const ActionBar = styled.div`
    min-width: 288px;
    display: flex;
    flex-direction: column;
  `;
  const ActionPanel = styled.div`
    background-color: #65c8d0;
    display: block;
    width: 100%;
    margin: 24px;
    border: 10px black solid;
  `;
  const Action = styled.button`
    width: 156px;
    height: 48px;
    background-color: #ba9bc9;
    color: black;
  `;
  const Stage = styled.div`
    background-color: #ba9bc9;
    width: 100%;
  `;
  const StageItem = styled.svg`
    background-color: #3e7e7f;
    background-color: #ba9bc9;
    height: 144px;
    width: 144px;
  `;

  return (
    <Window>
      <GlobalStyles />
      <ActionBar>
        <ActionPanel>
          <Action>Click Me</Action>
        </ActionPanel>
      </ActionBar>
      <Stage>
        <StageItem />
      </Stage>
    </Window>
  );
};

export default App;
