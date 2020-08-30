// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body, * {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 14px;
    }
    body {
        background-color: black;
    }
    a {
        color: inherit;
        text-decoration: none;
    }



    * {
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;

export default GlobalStyles;