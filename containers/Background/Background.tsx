import styled, { DefaultTheme } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

export default styled.div<{ page: keyof DefaultTheme["background"] }>`
  min-height: 100vh;
  width: 100%;
  padding-top: 85px;
  background: no-repeat center;
  background-size: cover;
  background-image: ${(props) =>
    `url(${props.theme.background[props.page].mobile})`};

  ${tabletOnly} {
    padding-top: 100px;
    background-image: ${(props) =>
      `url(${props.theme.background[props.page].tablet})`};
  }

  ${desktopOnly} {
    padding-top: 160px;
    background-image: ${(props) =>
      `url(${props.theme.background[props.page].desktop})`};
  }
`;
