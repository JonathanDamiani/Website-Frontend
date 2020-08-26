import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
    background-color: transparent;
    border: none;
`

const BaseButton = (props) => {
    return (
        <ButtonBase onClick={props.onClick}>
            {props.children}
        </ButtonBase>
    )
}

export default BaseButton;
