import styled from 'styled-components';

export const H3 = styled.h2`
	position: relative;
	color:${(props) => props.theme.fontColor};
	font-size: 1.5em;
	font-weight: 400;
	letter-spacing: 2px;
	font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	z-index: 100;
`;

export default H3;
