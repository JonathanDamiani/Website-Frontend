import styled from 'styled-components';

export const H3 = styled.h2`
	color:${(props) => props.theme.fontColor};
	font-size: 1.5em;
	font-weight: 400;
	letter-spacing: 2px;
	font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export default H3;
