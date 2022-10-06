import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

 export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.8rem; 
        font-family: 'VT323', monospace;
        font-weight: 400;
        line-height: 1.4;
        background-color: ${theme.currentTheme.background};
    }

    ul, ol {
        margin: 0;
        padding: 0;

        > li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
    }

    img {
        display: block;
        width: 100%;
    }

    .normal {
        background-color: #A8A77A;
    }
    .fire {
        background-color: #ffa756;
    }
    .water {
        background-color: #58abf6;
    }
    .electric {
        background-color: #F7D02C;
    }
    .grass {
        background-color: #8bbe8a;
    }
    .ice {
        background-color: #96D9D6;
    }
    .fighting {
        background-color: #C22E28;
    }
    .poison {
        background-color: #A33EA1;
    }
    .ground {
        background-color: #E2BF65;
    }
    .flying {
        background-color: #A98FF3;
    }
    .psychic {
        background-color: #F95587;
    }
    .bug {
        background-color: #A6B91A;
    }
    .rock {
        background-color: #B6A136;
    }
    .ghost {
        background-color: #735797;
    }
    .dragon {
        background-color: #6F35FC;
    }
    .dark {
        background-color: #705746;
    }
    .steel {
        background-color: #B7B7CE;
    }
    .fairy {
        background-color: #D685AD;
    }
    .all {
        background-color: #333333;
    }
`;
 
