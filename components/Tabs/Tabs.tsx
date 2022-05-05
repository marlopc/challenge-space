import { NavText } from "components/Text";
import React from "react";
import styled, { css } from "styled-components";
import { desktopOnly } from "styles/breakpoints";

type TabItem = {
  id: string | number;
  label: string;
};

type TabsProps = {
  readonly tabs: TabItem[];
  selected: TabItem["id"];
  onSelection: (id: TabItem["id"]) => void;
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

const Tabs: React.FC<TabsProps> = ({ tabs, selected, onSelection }) => {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Tab key={tab.id} isSelected={selected === tab.id}>
          <button onClick={() => onSelection(tab.id)}>
            <NavText>{tab.label}</NavText>
          </button>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tabs;
