import * as React from "react";
import styled from "styled-components";
import { MenuItemKey } from "./data";
import DesignSvg from "./svgComponents/DesignSvg";

const path = styled.path``;
const circle = styled.circle``;

export interface ISVGMakerProps {
  menuItem: MenuItemKey;
}

export const SVGMaker: React.FC<ISVGMakerProps> = props => {
  if (props.menuItem === "hello") {
    return <p>Hello World></p>;
  } else if (props.menuItem === "svg") {
    return <DesignSvg />;
  }
  return <></>;
};

export default SVGMaker;
