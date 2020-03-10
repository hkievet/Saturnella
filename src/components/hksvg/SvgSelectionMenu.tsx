import * as React from "react";
import { svgCollection } from "./SvgCollection";
import styled from "styled-components";
import { MyGuyStillImage } from "./paths/MyGuyPath";
import { Keys } from "../hksvg/WeirdRotateAnimation";
import UntitledCardPathSVG from "./paths/UntitledCardPath";

export interface ISvgSelectionMenuProps {}

const Div = styled.div`
  background-color: white;
  color: black;
  padding: 36px;
  margin: 36px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.button`
  width: 100%;
  border: 12px solid black;
  margin: 12px;
  overflow-y: hidden;
  &:hover {
    border: 12px dashed black;
    cursor: pointer;
    > svg {
      transform: scaleX(25deg);
      animation: ${Keys} 2s linear infinite;
    }
  }
`;

const SVGStyled = styled(svgCollection.a.pattern)`
  height: 100%;
  width: 100%;
`;

export const SvgSelectionMenu: React.FC<ISvgSelectionMenuProps> = props => {
  const Item = styled(svgCollection.b.pattern)``;
  return (
    <Div>
      <MenuItem>
        <MyGuyStillImage />
      </MenuItem>
      <MenuItem>
        <Item />
      </MenuItem>
      <MenuItem>
        <UntitledCardPathSVG />
      </MenuItem>
    </Div>
  );
};

export default SvgSelectionMenu;
