import * as React from 'react';
import { MenuItemKey } from './data';
import DesignSvgImport from './svgComponents/DesignSvg';

export interface ISVGMakerProps {
  menuItem: MenuItemKey;
  input1: number;
}

const DesignSvg: React.FC<any> = (props) => {
  return <DesignSvgImport />;
};

/**
 *
 * @param props a MenuItemKey with the value referring to the SVG to serve up
 */
const SVGChooser: React.FC<ISVGMakerProps> = (props) => {
  if (props.menuItem === 'svg') {
    return <DesignSvgImport />;
  }
  return <svg></svg>;
};

export default SVGChooser;
