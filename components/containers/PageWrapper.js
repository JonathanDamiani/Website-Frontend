import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div `
    height:100vh;
    width:100vw;
    background-color: ${props => props.theme.colorBG1};
`
export default PageWrapper;
