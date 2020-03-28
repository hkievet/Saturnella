import * as React from "react";
import styled, { ThemeContext } from "styled-components";
import Slider from "./Slider";
import { AppContext } from "../context";

const ActionBar = styled.div`
  background-color: #cc99cc;
  min-width: 288px;
  display: flex;
  flex-direction: column;
  border: 14px solid black;
  border-top: none;
  margin-right: 24px;
`;

const ActionPanel = styled.div`
  background-color: #3e7e7f;
  display: flex;
  flex-direction: column;
  margin: 24px;
  border: 10px black solid;
`;

const Action = styled.button`
  display: block;
  width: 156px;
  height: 48px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-family: "Spartan", sans-serif;
  font-size: 18px;
  margin: 24px auto;
  border-radius: 24px;
  padding-top: 8px; //offsets stupid spartan <flex-direction className=""></flex-direction>
  border: 6px solid black;
  transition: 1s;
  &:focus {
    border: double;
  }
  &:hover {
    transition: none;
    cursor: pointer;
    border: dashed 2px;
  }
`;

const Display = styled.label`
  margin: 12px;
  text-align: center;
`;

export interface IDataState {
  sliderValue: number;
}

export interface IActionBarProps {
  onClick: () => void;
  onOutputState: (state: IDataState) => void;
}

export const ExampleActionBar: React.FC<IActionBarProps> = props => {
  const {updateContext} = React.useContext(AppContext)
  React.useEffect(() => {
    props.onOutputState({ sliderValue: 50 });
  }, []);

  const onToggleTheme = ()=>{
    updateContext()
    return 
  }

  return (
    <ActionBar>
      <ActionPanel>
        <Action onClick={onToggleTheme}>theme</Action>
      </ActionPanel>
    </ActionBar>
  );
};

export default ActionBar;
