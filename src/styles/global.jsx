import { createGlobalStyle } from 'styled-components'
import { fonts } from './variables'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    font-family: ${fonts.serif};
    transition: 0.2s;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  #root {
    isolation: isolate;
  }

  p {
    letter-spacing: -0.3%;
    line-height: 25.6px;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.secondaryTextColor};
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.primaryTextColor};
  }

  ::selection {
    background-color: #f81ce5;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 15px;
    }
  }
`
