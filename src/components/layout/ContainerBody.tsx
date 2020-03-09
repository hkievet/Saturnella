import * as React from "react";
import styled from "styled-components";

export interface IContainerBodyProps {}

const ContainerBody = styled.div`
  display: flex;
  max-width: 888px;
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
  padding: 24px;
  margin: 24px auto;
  p {
    line-height: 30px;
  }
`;

export default ContainerBody;
