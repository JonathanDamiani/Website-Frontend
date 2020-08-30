import styled from 'styled-components';

export const H2 = styled.h2`
	color:${(props) => props.theme.fontColor};
	font-size: 2em;
	font-weight: 400;
	letter-spacing: 2px;
	font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export default H2;
