import styled, { css } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

export default styled.p<{ color: "main" | "secon" }>`
  ${(props) => {
    const fonts = props.theme.fonts;

    return css`
      ${props.color === "secon" &&
      css`
        color: ${props.theme.colors.secon};
      `};
      font-family: ${fonts.names[0]};
      font-size: ${fonts.sizes.subheading1.mobile};
      ${tabletOnly} {
        font-size: ${fonts.sizes.subheading1.tablet};
      }

      ${desktopOnly} {
        font-size: ${fonts.sizes.subheading1.desktop};
      }
    `;
  }}
`;
