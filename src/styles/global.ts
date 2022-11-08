import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: white;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #1D1D1D;

    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  }
`