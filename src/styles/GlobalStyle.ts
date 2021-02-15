import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
  }

  button {
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
