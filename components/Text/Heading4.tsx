import styled, { css } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

export default styled.p<{ color?: "white" | "grey" | "black" }>`
  ${(props) => {
    const fonts = props.theme.fonts;

    return css`
      ${props.color === "grey" &&
      css`
        color: ${props.theme.colors.grey};
      `}
      ${props.color === "black" &&
      css`
        color: ${props.theme.colors.black};
      `}
      font-family: ${fonts.names[0]};
      font-size: ${fonts.sizes.heading4.mobile};
      ${tabletOnly} {
        font-size: ${fonts.sizes.heading4.tablet};
      }

      ${desktopOnly} {
        font-size: ${fonts.sizes.heading4.desktop};
      }
    `;
  }}
`;
