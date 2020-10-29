import styled from 'styled-components';

export const H2 = styled.h2`
	color:${(props) => props.contrastColor ? props.theme.fontColorNegative : props.theme.fontColor};
	font-size: 3em;
	font-weight: 400;
	letter-spacing: 2.5px;
	font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	${({ asTitle }) => asTitle && `
    	font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	`}
	
	text-align: ${(props) => props.textAlign};
	margin: ${(props) => props.textMargin};
	cursor: default;
`;

export default H2;
