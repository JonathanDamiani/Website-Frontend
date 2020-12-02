/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'

const Container = styled.section`
    position: relative;
    background-color: ${props => props.bg2 ? props.theme.colorBG3 : props.theme.colorBG1};
    padding:0;
    
`
export default Container;
