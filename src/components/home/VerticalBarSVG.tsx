import * as React from "react";
import { ReactComponent as Hearts } from "../../assets/bad_heart_vertical_pattern.svg";
import styled, { css } from "styled-components";
import { Keys } from "./WeirdRotateAnimation";

const animationProperty = css`
  animation: ${Keys} 2s linear infinite;
`;
const animationPropertyReverse = css`
  animation: ${Keys} 2s linear infinite;
  animation-direction: reverse;
`;
export interface IVerticalBarSVGProps {
  reversed?: boolean;
  animated?: boolean;
}

const VerticalBarWrapper = styled.div<IVerticalBarSVGProps>`
  display: flex;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
  ${props => {
    if (props.animated) {
      if (props.reversed) {
        return animationProperty;
      } else {
        return animationPropertyReverse;
      }
    }
  }};
`;

const HeartsStyled = styled(Hearts)<IVerticalBarSVGProps>`
  height: 100%;
  ${props => {
    if (props.reversed) {
      return "transform: scaleX(-1)";
    }
  }};
`;

export const VerticalBarSVG: React.FC<IVerticalBarSVGProps> = props => {
  const { reversed = false, animated = false } = props;
  return (
    <VerticalBarWrapper {...props}>
      <HeartsStyled reversed={reversed} />
    </VerticalBarWrapper>
  );
};

export default VerticalBarSVG;
