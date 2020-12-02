/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints'

const GlobalStyles = createGlobalStyle`
    html, body, * {
        padding: 0;
        margin: 0;
        font-family:'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 10px;

        @media ${device.largeDesktop} {
            font-size: 14px;
        }

        @media ${device.desktop} {
            font-size: 14px;
        }

        @media ${device.laptop}{
            font-size: 13px;
        }

        @media ${device.tablet} {
            font-size: 11px;
        }

        @media ${device.mobileLarge} {
            font-size: 10px;
        }

        @media ${device.mobileSmall} {
            font-size: 8px;
        }
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colorBG1};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colorPrimary};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colorPrimary};
    }

    body {
        background: ${props => props.theme.colorBG1};
    }
    
    p {
        font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.5;
    }

    span {
        font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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