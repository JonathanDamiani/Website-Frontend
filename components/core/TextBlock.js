/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const TextBlock = styled.p`
    color:${(props) => props.contrastColor ? props.theme.fontColorNegative : props.theme.fontColor};
	font-size: ${(props) => props.textSize ? props.textSize : "1em"};;
	font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

	@media ${device.tablet} {
		text-align: center;
		font-size: 1.5em;
		line-height:1.5;
	}

	@media ${device.mobileSmall} {
		font-size: 1.3em;
	}

`
export default TextBlock;