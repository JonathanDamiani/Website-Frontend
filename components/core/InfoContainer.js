import styled from 'styled-components';

const InfoContainer = styled.div`
	position: absolute;
	width: 45vw;
	top: 30%;

	${({ leftSide }) => leftSide && `
		left: 10%;
	`}

	${({ rightSide }) => rightSide && `
		right: 10%;
	`}
`;

export default InfoContainer;
