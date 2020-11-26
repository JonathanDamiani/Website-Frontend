import styled from 'styled-components';
import { device } from '../../styles/breakpoints'

export const H2 = styled.h2`
	color:${(props) => props.contrastColor ? props.theme.fontColorNegative : props.theme.fontColor};
	font-size: ${(props) => props.textSize ? props.textSize : "2em"};;
	font-weight: 400;
	letter-spacing: 2px;
	line-height:1;
	font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	${({ asTitle }) => asTitle && `
		font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	`}
	
	text-align: ${(props) => props.textAlign};
	margin: ${(props) => props.textMargin};
	cursor: default;

	@media ${device.tablet} {
		text-align: center;
	}

	@media ${device.mobileLarge} {
	}

	@media ${device.mobileSmall} {
		font-size: 2em;
	}
`;

export default H2;
