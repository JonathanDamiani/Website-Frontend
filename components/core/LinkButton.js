import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'; 
import Icon from './Icon';
import { useRouter } from 'next/router'

const LinkItem = styled.a `
    cursor: pointer;
    position: relative;
    
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

const LinkButton = React.forwardRef((props, ref) => {
    const {url, children, isExternalLink, LinkIcon, LinkIconActive, onClick, href, hasText} = props;
    const router = useRouter();

    let isActive = false;

    if (router.pathname === href ) {
        isActive = true;    
    }

    return (
        <Fragment>
            {
                isExternalLink ? 
                <LinkItem hasText={hasText} href={url} target="_blank">
                    {children}
                </LinkItem>
                :
                <LinkItem hasText={hasText} onClick={onClick} ref={ref}>
                    {children}
                    {LinkIcon && !isActive && <Icon Icon ={LinkIcon} size="2.5"/>}
                    {LinkIconActive && isActive && <Icon isActive={true} Icon ={LinkIconActive} size="2.5"/>}
                </LinkItem>   
            }
        </Fragment>
        
    )
})

LinkButton.propTypes = {
    isExternalLink: PropTypes.bool,
    hasText: PropTypes.bool
}

LinkButton.defaultProps = {
    isExternalLink: false,
    hasText: false
}
export default LinkButton;
