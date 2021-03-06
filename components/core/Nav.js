/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'

const Nav = styled.nav`
    position:fixed;
    top: 0;
    background-color: ${props => props.theme.colorBG2};
    width:100%;
    z-index:120;
    height: 100px;
    display:none;
    z-index: 999;
`

export default Nav;
