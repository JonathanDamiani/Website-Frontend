import React from 'react';
import styled, {keyframes} from 'styled-components';


const buttonEffect = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 400% 0; }
`;

const ButtonText = styled.span`
    position: relative;
    display: inline-block;
    font-size: 1.2em;
    font-weight:bold;
    text-transform: uppercase;
    color: ${props => props.theme.colorSecondary};
    overflow: hidden;
    z-index:100;
    background: linear-gradient(to left, ${props => props.theme.colorPrimary}, ${props => props.theme.colorPrimary} 50%, ${props => props.theme.colorTerciary} 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 0%;
    transition: background-position 0.3s ease;
`

const MainButtonStyle = styled.button`
    width:10em;
    height:3em;
    position: relative;
    background: transparent;
    border:none;
    margin:10px 10px;
    border-radius:10px;
    cursor: pointer;
    z-index: 100;

    &::before {
        content: '';
        background: linear-gradient(40deg, ${props => props.theme.colorPrimary}, ${props => props.theme.colorSecondary}, ${props => props.theme.colorTerciary});
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: 50;
        filter: blur(5px);
        width: calc(100% + 7px);
        height: calc(100% + 7px);
        animation: ${buttonEffect} 10s linear infinite;
        border-radius: 10px;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colorBG1};
        left: 0;
        top: 0;
        border-radius: 10px;
        z-index: 50;
    }

    &:hover {
        ${ButtonText} {
            background-position: 100% 100%;
        }
        &::before {
            animation: ${buttonEffect} 5s linear infinite;
        }
    }
`

const MainButton = (props) => {
    return (
        <MainButtonStyle onClick={props.onClick}>
            <ButtonText>
                {props.children}
            </ButtonText>
        </MainButtonStyle>
    )
}

export default MainButton;