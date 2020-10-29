import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TabButton from './TabButton';

const TabItem = styled.li `
    background-color: ${props => props.isActive ? props.theme.colorBG1 : props.theme.colorBG2};
    width: 100%;
    border-right: 2px solid ${props => props.theme.colorPrimary};

    &:last-child {
        border-right: none;
    }
    cursor:pointer;
`

const LabelTab = styled.span`
    position:absolute;
    font-size: 1.5em;
    text-align:center;
    left:50%;
    top:50%;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colorPrimary};
    opacity:0;
`

const Tab = ({label, onClick, isActive, IconTab}) => { 
    let isThisActive = false;
    
    if (isActive === label) {
        isThisActive = true;
    }

    return (
        <TabItem isActive={isThisActive} onClick={onClick}>
            <TabButton 
                    IconTab={IconTab}
                    hasText={true}
                    isActive={isThisActive}
                >
                <LabelTab>
                    {label}
                </LabelTab>
            </TabButton>
        </TabItem>
    )
}

Tab.propTypes = {
}

export default Tab;
