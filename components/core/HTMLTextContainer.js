/* 
 *  Main
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const HTMLTextContainer = styled.div`
    pointer-events: auto;

    p {
        color:${(props) => props.contrastColor ? props.theme.fontColorNegative : props.theme.fontColor};
        font-size: ${(props) => props.textSize ? props.textSize : "1.4em"};;
        font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        @media ${device.tablet} {
            text-align: center;
            font-size: 1.5em;
            line-height:1.5;
        }

        @media ${device.mobileSmall} {
            font-size: 1.8em;
        }

        margin-bottom: 10px;
    }
    strong {
        font-size: 1em;

        @media ${device.tablet} {
            font-size: 1.1em;
        }
    }

`
export default HTMLTextContainer;