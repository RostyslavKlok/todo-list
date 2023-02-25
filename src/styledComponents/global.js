import { createGlobalStyle } from "styled-components";
import "typeface-caveat";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Caveat", sans-serif;
}

body {
  background: linear-gradient(to right, rgb(233, 129, 148), rgb(233, 147, 142));
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
