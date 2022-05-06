import { NavText } from "components/Text";
import React from "react";
import styled, { css } from "styled-components";
import { desktopOnly } from "styles/breakpoints";

type TabItem = {
  isSelected: boolean;
  label: string;
};

type TabsProps = {
  readonly tabs: TabItem[];
  onSelection: (index: number) => void;
};

const Wrapper = styled.ul`
  display: flex;
`;

const Tab = styled.li<{ isSelected: boolean }>`
  margin: 0 10px;
  padding: 5px 0;
  border-bottom: 3px solid
    ${(props) => (props.isSelected ? props.theme.colors.white : "transparent")};
  transition: border-color 200ms ease;
  color: ${(props) => props.theme.colors[props.isSelected ? "white" : "secon"]};

  ${desktopOnly} {
    &:hover {
      ${(props) =>
        !props.isSelected &&
        css`
          border-color: ${props.theme.colors.transparentWhite};
        `}
    }
  }
`;

const Tabs: React.FC<TabsProps> = ({ tabs, onSelection }) => {
  return (
    <Wrapper>
      {tabs.map((tab, index) => (
        <Tab key={index} isSelected={tab.isSelected}>
          <button onClick={() => onSelection(index)}>
            <NavText>{tab.label}</NavText>
          </button>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tabs;
