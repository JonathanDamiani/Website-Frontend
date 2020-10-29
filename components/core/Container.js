import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const Container = styled.div`
    position: relative;
    display: block;
    margin: 0 auto;
    min-height:100vh;
    width:100vw;
    background-color: ${props => props.bg2 ? props.theme.colorBG3 : props.theme.colorBG1};
    padding: 1em 6.5em;
    top:0;
`
export default Container;
