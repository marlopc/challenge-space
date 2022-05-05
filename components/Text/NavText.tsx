import styled, { css } from "styled-components";
import { tabletOnly } from "styles/breakpoints";

export default styled.p<{ color?: "main" | "secon" }>`
  ${(props) =>
    props.color === "secon" &&
    css`
      color: ${props.theme.colors.secon};
    `}
  font-family: ${(props) => props.theme.fonts.names[1]};
  text-transform: uppercase;
  letter-spacing: ${(props) => props.theme.fonts.spacing.nav};
  font-size: ${(props) => props.theme.fonts.sizes.nav.mobile};

  ${tabletOnly} {
    font-size: ${(props) => props.theme.fonts.sizes.nav.tablet};
  }
`;
