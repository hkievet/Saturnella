import * as React from "react";
import Animation from "./Animation";
import styled from "styled-components";

const HeaderContainer = styled.button`
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  text-align: center;
  border: 12px solid white;
  &:hover {
    animation: ${Animation} 2s linear infinite;
    cursor: pointer;
  }
  margin-top: 24px;

  /**reset stuff */
  background-color: black;
  color: white;
`;

export interface IHeaderContainerProps {}

export default HeaderContainer;
