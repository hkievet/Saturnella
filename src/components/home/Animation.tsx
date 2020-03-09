import * as React from "react";
import { keyframes } from "styled-components";

export interface IAnimationProps {}

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

export default Animation;
