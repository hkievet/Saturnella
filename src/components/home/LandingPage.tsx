import * as React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import VerticalBarSVG from "./VerticalBarSVG";
import PatternSVG, { Square } from "./Square";
import Animation from "./Animation";
import ContainerBody from "./ContainerBody";
import HeaderContainer from "./HeaderContainer";
import GlobalStyles from "./GlobalStyles";
import Globs from "./WeirdRotateAnimation";
//import PatternSvg from "../../assets/pattern-svg.inline";
//import svgfileurl, {
//ReactComponent as svgFile
//} from "../../assets/bad_heart_vertical_pattern.svg";

const AppContainer = styled.div``;

const Header = styled.h1`
  font-family: "Spartan", sans-serif;
  font-size: 36px;
  margin: 12px auto;
  line-height: 48px;
`;

const TextSection = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-bottom: 60px;
`;

const VerticalColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const App = () => {
  const [isTriggered, setIsTriggered] = React.useState(false);
  const toggleMe = () => {
    setIsTriggered(!isTriggered);
  };

  const AnimationCss = isTriggered ? <Globs /> : <></>;
  return (
    <AppContainer>
      <GlobalStyles />
      <HeaderContainer onClick={toggleMe}>
        <Header>Saturnella</Header>
      </HeaderContainer>
      <ContainerBody>
        <VerticalBarSVG animated={isTriggered} />
        <VerticalColumn>
          <TextSection>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              iste minus, a harum eveniet fuga vero in ducimus consequuntur
              ullam magnam iusto voluptatum numquam tempore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              iste minus, a harum eveniet fuga vero in ducimus consequuntur
              ullam magnam iusto voluptatum numquam tempore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              iste minus, a harum eveniet fuga vero in ducimus consequuntur
              ullam magnam iusto voluptatum numquam tempore.
            </p>
          </TextSection>
          <Square />
        </VerticalColumn>
        <VerticalBarSVG reversed={true} animated={isTriggered} />
      </ContainerBody>
    </AppContainer>
  );
};

export default App;
