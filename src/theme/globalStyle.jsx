import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fontFamily};
    color: ${({theme}) => theme.colors.white};
  }

  body {
    background-color: ${({theme}) => theme.colors.purple};
    color: ${({theme}) => theme.colors.white};
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: ${({theme}) => theme.fontSizes.h1};
    line-height: ${({theme}) => theme.lineHeights.h1};
  }

  p {
    font-size: ${({theme}) => theme.fontSizes.p};
    line-height: ${({theme}) => theme.lineHeights.p};
  }
`;
 
export default GlobalStyle;