import styled from 'styled-components';
import { device } from '../../styles/breakpoints';


const BoxContainer = styled.div`
    display:flex;
    height: 70vh;
    width: 50vw;
    border: 3px solid ${props => props.theme.colorPrimary};
    border-radius: 2em;
    background-color: ${props => props.theme.colorBG2}
`
export default BoxContainer;
