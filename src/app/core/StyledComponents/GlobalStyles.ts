'use client'
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${theme.bodyColor};
    font-family: 'Mulish';
}
`;
