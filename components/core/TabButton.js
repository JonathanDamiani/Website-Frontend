import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'; 
import Icon from './Icon';

const TabButtonStyle = styled.div `
    display:flex;
    position: relative;
    justify-content: center;
    width:100%;
    cursor: pointer;
    
    ${({ hasText }) => hasText && `
        span, div {
            transition: all 0.4s ease;
        }
        &:hover span {
            opacity:1;
        }

        &:hover div {
            opacity:0;
        }
    `}
`

const TabButton = ((props) => {
    const { children, IconTab, onClick, isActive, hasText} = props;

    return (
        <TabButtonStyle hasText={hasText} onClick={onClick}>
            {children}
            {IconTab && <Icon isActive={isActive} Icon={IconTab} size="5"/>}
        </TabButtonStyle>   
    
    )
})

TabButton.propTypes = {
    hasText: PropTypes.bool
}

TabButton.defaultProps = {
    hasText: false
}
export default TabButton;
