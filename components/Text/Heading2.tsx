import styled, { css } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

export default styled.h2`
  ${(props) => {
    const fonts = props.theme.fonts;

    return css`
      font-family: ${fonts.names[0]};
      font-size: ${fonts.sizes.heading2.mobile};
      ${tabletOnly} {
        font-size: ${fonts.sizes.heading2.tablet};
      }

      ${desktopOnly} {
        font-size: ${fonts.sizes.heading2.desktop};
      }
    `;
  }}
`;
