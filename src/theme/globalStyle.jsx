import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  body {
    background-color: ${({theme}) => theme.colors.purple};
    color: ${({theme}) => theme.colors.white};
  }
`;
 
export default GlobalStyle;