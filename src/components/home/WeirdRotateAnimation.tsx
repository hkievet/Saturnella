import { keyframes, createGlobalStyle } from "styled-components";

export const Keys = keyframes`
  from {
    transform: rotateX(0);
  }
  50% {
    transform: rotateY(180deg)
  }
  to {
    transform: rotateX(0);
  }
`;

const Globs = createGlobalStyle`
  svg:nth-of-type(1) {
    animation: ${Keys} 2s linear infinite;
  }
`;

export default Globs;
