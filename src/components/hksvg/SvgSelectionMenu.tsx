import * as React from "react";
import { svgCollection } from "./SvgCollection";

export interface ISvgSelectionMenuProps {}

export const SvgSelectionMenu: React.FC<ISvgSelectionMenuProps> = props => {
  return <div>{svgCollection}</div>;
};

export default SvgSelectionMenu;
