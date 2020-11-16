import styled from 'styled-components'

const TextBlock = styled.p`
    color:${(props) => props.contrastColor ? props.theme.fontColorNegative : props.theme.fontColor};
	font-size: ${(props) => props.textSize ? props.textSize : "1.4em"};;
	font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`
export default TextBlock;