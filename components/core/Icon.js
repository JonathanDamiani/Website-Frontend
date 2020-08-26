import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon';
import PropTypes from 'prop-types'


const IconBase = styled.div`
    ${StyledIconBase} {
        color: ${props => props.isActive ? props.theme.colorPrimary : props.theme.colorSecondary};
        height:${(props)=> props.size}em;
        cursor: pointer;
        
        &:hover{
            color: ${props => props.theme.colorPrimary};
            transform: scale(1.2);
        }
    }
`
const Icon = ({Icon: Icon, size, isActive}) => {
    
    return (
        <IconBase 
            size={size}
            isActive={isActive}
        >
            {Icon && <Icon/>}
        </IconBase>
    )
}

Icon.propTypes = {
    size: PropTypes.string,
    isActive: PropTypes.bool
}

Icon.defaultProps = {
    size: "2",
    isActive: false
}

export default Icon;


