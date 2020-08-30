import styled from 'styled-components';

import { changeOpacity, changeColor } from "../Animations";

const AnimateLetter = styled.span`
	font-size: 1em;
	font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

	animation-name: ${props => props.opacityAnim ? changeOpacity() : changeColor(props.theme.colorPrimary, props.theme.fontColor)};
	animation-duration:  ${props => props.animDuration}s;

	&:hover {
		color:  ${props => props.hasHover ? props.theme.colorPrimary : props.theme.fontColor};
	}
`;

export default AnimateLetter;