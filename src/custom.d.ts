//https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png';