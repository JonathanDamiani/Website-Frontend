import styled from 'styled-components';
import { device } from '../../styles/breakpoints'

const H1 = styled.h1`
	color:${(props) => props.theme.fontColor};
	font-size: ${(props) => props.textSize ? props.textSize : "3.2em"};;
	line-height: 1.2;
	letter-spacing: 0.25em;
	font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-display: fallback;
	margin: ${(props) => props.textMargin};
	text-align: ${(props) => props.textAlign};
	cursor: default;
	pointer-events: all;

	@media ${device.tablet} {
		text-align: center;
	}

	@media ${device.mobileLarge} {
		
	}

	@media ${device.mobileSmall} {
		font-size: 2.5em;
	}
`;

export default H1;
