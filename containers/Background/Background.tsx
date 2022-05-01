import styled, { DefaultTheme } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/queries";

export default styled.div<{ page: keyof DefaultTheme["background"] }>`
  min-height: 100vh;
  width: 100%;
  background: no-repeat center;
  background-size: cover;
  background-image: ${(props) =>
    `url(${props.theme.background[props.page].mobile})`};

  ${tabletOnly} {
    background-image: ${(props) =>
      `url(${props.theme.background[props.page].tablet})`};
  }

  ${desktopOnly} {
    background-image: ${(props) =>
      `url(${props.theme.background[props.page].desktop})`};
  }
`;
