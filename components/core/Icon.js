import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { motion } from "framer-motion"
import PropTypes from 'prop-types'

const IconBase = styled(motion.div)`
    ${StyledIconBase} {
        color: ${props => props.isActive ? props.theme.colorPrimary : props.theme.colorSecondary};
        height:${(props)=> props.size}em;
        width:${(props)=> props.size}em;
        margin: ${props=> props.hasMargin ? props.iconMargin : "0"};
        cursor: ${props => props.hasHover && "pointer"};;
        &:hover{
            color: ${props => props.hasHover && props.theme.colorPrimary};
        }
    }
`
const Icon = ({Icon: Icon, size, isActive, hasMargin, iconMargin, hasHover}) => {
    
    return (
        <IconBase
            layout
            size={size}
            isActive={isActive}
            hasMargin={hasMargin}
            iconMargin={iconMargin}
            hasHover={hasHover}
        >
            {Icon && <Icon/>}
        </IconBase>
    )
}

Icon.propTypes = {
    size: PropTypes.string,
    isActive: PropTypes.bool,
    hasHover: PropTypes.bool
}

Icon.defaultProps = {
    size: "2",
    isActive: false,
    hasHover: true
}

export default Icon;


