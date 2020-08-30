import styled from 'styled-components'

const Nav = styled.nav`
    position:fixed;
    bottom: 0;
    background-color: ${props => props.theme.colorBG2};
    width:100%;
    z-index:120;
`

export default Nav;
