import React, {Fragment} from 'react';
import styled, {keyframes} from 'styled-components';
import { device } from '../../styles/breakpoints'

const buttonEffect = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 400% 0; }
`;

const ButtonText = styled.span`
    position: relative;
    display: inline-block;
    font-size: 1em;
    font-weight:bold;
    text-transform: uppercase;
    color: ${props => props.theme.colorSecondary};
    overflow: hidden;
    z-index:100;
    background: linear-gradient(to left, ${props => props.theme.colorPrimary}, ${props => props.theme.colorPrimary} 50%, ${props => props.theme.colorSecondary} 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 0%;
    transition: background-position 0.3s ease;
`

const MainButtonStyle = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width:10em;
    height:2.5em;
    position: relative;
    background: transparent;
    border:1px solid white;
    margin:10px 10px;
    border-radius:10px;
    cursor: pointer;
    z-index: 100;

    &::before {
        content: '';
        background: linear-gradient(40deg, ${props => props.theme.colorPrimary}, ${props => props.theme.colorTerciary});
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
        opacity: 0;
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
        transform:scale(1.05);
        border:1px solid white;
        ${ButtonText} {
            background-position: 100% 100%;
        }
        &::before {
            animation: ${buttonEffect} 5s linear infinite;
            opacity: 1;
        }
    }
`

const MainButton = React.forwardRef((props, ref) => {
    const {url, children, isExternalLink, onClick,} = props;
    return (
        <Fragment>
        {
            isExternalLink ?
                <MainButtonStyle href={url} target="_blank">
                    <ButtonText>
                        {children}
                    </ButtonText>
                </MainButtonStyle>
            :
            <MainButtonStyle onClick={onClick} ref={ref}>
                <ButtonText>
                    {children}
                </ButtonText>
            </MainButtonStyle>
        }
        </Fragment>
    )
})

export default MainButton;
