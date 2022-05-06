import styled, { css } from "styled-components";
import { desktopOnly, tabletAndDesktop, tabletOnly } from "styles/breakpoints";

export default styled.p<{ color?: "main" | "secon"; center?: boolean }>`
  ${(props) => {
    const fonts = props.theme.fonts;

    return css`
      font-family: ${fonts.names[1]};
      font-size: ${fonts.sizes.body.mobile};
      text-transform: none;
      letter-spacing: 0.05em;
      line-height: calc(${fonts.sizes.body.mobile} + 9px);
      font-weight: 300;
      ${props.color === "secon" &&
      css`
        color: ${props.theme.colors.secon};
      `}
      ${props.center &&
      css`
        text-align: center;
      `}

      ${tabletOnly} {
        font-size: ${fonts.sizes.body.tablet};
      }

      ${desktopOnly} {
        font-size: ${fonts.sizes.body.desktop};
      }

      ${tabletAndDesktop} {
        line-height: calc(${fonts.sizes.body.desktop} + 12px);
      }
    `;
  }}
`;
