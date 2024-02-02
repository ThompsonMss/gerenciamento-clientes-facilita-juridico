import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh;
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, span, p {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: 0;
  }

  @media screen and (max-width: 768px) {
    :root {
        font-size: 16px;
    }

    ::-webkit-scrollbar {
        display: none;
    }
  }

  @media screen and (min-width: 1920px) {
    :root {
        font-size: 18px;
    }
  }

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: #acafbf;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #989ba9;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #7B7E8C;
    }
    ::-webkit-scrollbar-track {
    background: #d3d6e1;
    border: 0px none #ffffff;
    border-radius: 50px;
    }

    ::-webkit-scrollbar-corner {
    background: transparent;
    }

    scroll-margin-right: 1em;

    /* DROPDOWN ITEM BOOSTRAP */
    .dropdown-item.active, .dropdown-item:active {
        text-decoration: none;
        background-color: ${props => props.theme.Primary700};
    }

    .dropdown-menu.show {
        display: block;
        width: 100%;
    }
`