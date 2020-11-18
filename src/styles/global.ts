import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #007EA7;
    color: #00171F;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h1.start2P {
    font-family: 'Press Start 2P', sans-serif;
    font-size: 25px;
    letter-spacing: 10px;
  }

  button {
    cursor: pointer;
  }
`;
