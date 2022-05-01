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
  }
`;
