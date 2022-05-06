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
    color: ${(props) => props.theme.colors.white};
    -webkit-tap-highlight-color: transparent;
  }

  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 300;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #d0d6f9 #0b0d17;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.white};
  }
`;
