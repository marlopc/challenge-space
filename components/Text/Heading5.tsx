import styled, { css } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

export default styled.p<{ color?: "main" | "secon" }>`
  ${(props) => {
    const fonts = props.theme.fonts;

    return css`
      ${props.color === "secon" &&
      css`
        color: ${props.theme.colors.secon};
      `};
      font-family: ${fonts.names[1]};
      font-size: ${fonts.sizes.heading5.mobile};
      letter-spacing: ${fonts.spacing.heading5};
      ${tabletOnly} {
        font-size: ${fonts.sizes.heading5.tablet};
      }

      ${desktopOnly} {
        font-size: ${fonts.sizes.heading5.desktop};
      }
    `;
  }}
`;
