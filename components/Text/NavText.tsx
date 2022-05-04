import styled from "styled-components";
import { tabletOnly } from "styles/breakpoints";

export default styled.p`
  letter-spacing: ${(props) => props.theme.fonts.spacing.nav};
  font-size: ${(props) => props.theme.fonts.sizes.nav.mobile};

  ${tabletOnly} {
    font-size: ${(props) => props.theme.fonts.sizes.nav.tablet};
  }
`;
