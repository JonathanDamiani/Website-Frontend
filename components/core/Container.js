import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const Container = styled.section`
    position: relative;
    background-color: ${props => props.bg2 ? props.theme.colorBG3 : props.theme.colorBG1};
    padding:0;
    
`
export default Container;
