import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

  /* *{
    margin: 0;
    padding: 0;
  } */

  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
  }

  body {
    padding-left: 150px;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }

  textarea, input {
   font-family: inherit;
   font-size: inherit;
}
`;

export default GlobalStyles;
