import * as React from "react";
import styled, { keyframes } from "styled-components";

import { ReactComponent as Pattern } from "../../assets/squares.svg";

export interface IPatternSVGProps {}

const Animation = keyframes`
    from {
      opacity: 1;
    }
    40% {
      opacity: .6;
    }
    60% {
      opacity: .6
    }
    80% {
      opacity: 1;
    }
`;

const SVGWrapperStyle = styled.div`
  fill: white;
  height: 120px;
  width: 120px;
  margin: 24px auto;

  .squares_svg__cls-1 {
    animation: ${Animation} 2s linear infinite;
  }
`;

export const Square: React.FC<IPatternSVGProps> = props => {
  return (
    <SVGWrapperStyle>
      <Pattern />
    </SVGWrapperStyle>
  );
};

export default Square;
