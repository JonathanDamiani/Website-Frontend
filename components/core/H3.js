/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components';
import { device } from '../../styles/breakpoints'

export const H3 = styled.h3`
	color:${(props) => props.contrastColor ? props.theme.fontColorNegative : props.theme.fontColor};
	font-size: ${(props) => props.textSize ? props.textSize : "2em"};;
	font-weight: 400;
	letter-spacing: 2.5px;
	font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	line-height: 1.2;
	${({ asTitle }) => asTitle && `
		font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	`}
	text-align: ${(props) => props.textAlign};
	margin: ${(props) => props.textMargin};
	cursor: default;
	z-index: 2;

	@media ${device.mobileSmall} {
		font-size: 1.5em;
		line-height: 1.2;
		margin: 5px 0;
	}
`;

export default H3;
