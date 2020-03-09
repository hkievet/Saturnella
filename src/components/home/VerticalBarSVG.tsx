import * as React from "react";
import { ReactComponent as Hearts } from "../../assets/bad_heart_vertical_pattern.svg";
import styled from "styled-components";

export interface IVerticalBarSVGProps {}

export const VerticalBarSVG: React.FC<IVerticalBarSVGProps> = props => {
  return <Hearts height="100%" />;
};

export default VerticalBarSVG;
