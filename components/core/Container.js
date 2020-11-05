import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const Container = styled.section`
    position: relative;
    margin: 0 auto;
    min-height:100vh;
    width:100vw;
    background-color: ${props => props.bg2 ? props.theme.colorBG3 : props.theme.colorBG1};
    padding:0;
    top:0;
`
export default Container;
