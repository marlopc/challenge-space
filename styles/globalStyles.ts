import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    border: 0;
    background: none;
  }

  a,
  button {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.names[1]}, sans-serif;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white}
  }

  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 400;
  }
`;
