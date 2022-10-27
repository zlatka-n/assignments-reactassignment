import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  ${normalize}
  ${reset}
  body {
    font-family: 'Inter', sans-serif;
  }
`;
