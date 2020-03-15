import styled from "styled-components";

interface IOpacityProps {
  opacity?: number;
}

export const Slider = styled.input<IOpacityProps>`
  display: block;
  margin: 24px;
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  opacity: ${props => {
    return props.opacity || 1;
  }};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 5px solid black;
  }
`;

export default Slider;
