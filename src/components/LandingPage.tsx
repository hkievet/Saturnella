import * as React from 'react';
import styled from 'styled-components';

const Window = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  min-width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor.hex()};
  padding: 24px;
`;

export const LandingPage = () => {
  return <Window />;
};

export default LandingPage;
