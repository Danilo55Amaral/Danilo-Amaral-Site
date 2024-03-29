import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --dark: #14131a;

        --blue-600: #0F4C81;
        --blue-700: #2962FF;
        --blue-800: #071A52;
        --blue-900: #010A43;

        --orange-500: #FF9100;
        --orange-600: #FB8C00;
        --orange-700: #F57C00;
        --orange-800: #EF6C00;
        --orange-900: #E65100;

        --green-500: #4CAF50;
        --green-600: #43A047;
        --green-700: #388E3C;
        --green-800: #2E7D32;
        --green-900: #1B5E20;
        --green-1000: #2ECA16;

        --gray-500: #34465D;
        --gray-600: #607D8B;
        --gray-700: #455A64;
        --gray-800: #37474F;
        --gray-900: #263238;

        --purple-900: #2C034E;

        --magenta: #FF00FF;
        --dark-violet: #9400D3;
        --hover-blue: #47FFE7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--blue-900);
        color: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* scroll bar */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--blue-900);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--dark-violet);
        border-radius: 10px;
    }
`;