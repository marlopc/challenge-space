import styled, { css } from "styled-components";
import { desktopOnly, tabletOnly } from "styles/breakpoints";

export default styled.p`
  ${(props) => {
    const fonts = props.theme.fonts;

    return css`
      font-family: ${fonts.names[0]};
      font-size: ${fonts.sizes.heading3.mobile};
      ${tabletOnly} {
        font-size: ${fonts.sizes.heading3.tablet};
      }

      ${desktopOnly} {
        font-size: ${fonts.sizes.heading3.desktop};
      }
    `;
  }}
`;
