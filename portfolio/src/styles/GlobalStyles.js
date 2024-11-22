import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    color: #333;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
