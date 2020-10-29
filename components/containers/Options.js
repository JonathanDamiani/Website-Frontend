import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { List, ListItem, LinkButton, Icon, BaseButton } from '../';
import { currentThemeVar } from '../../utils/cache';
import { lightTheme, darkTheme, contrastTheme } from '../../styles/themes'
import * as ioniconsSolid from '@styled-icons/ionicons-solid';
import * as ioniconsOutline from '@styled-icons/ionicons-outline';

const OptionsContainer = styled.div`
    position:absolute;
    z-index:120;
    left:0;
    top:30%;
`
const Separator = styled.div`
    position: relative;
    display: block;
    background-color:${props => props.theme.colorSecondary};
    height: 2px;
    width:80%;
    margin: 0 auto;
`

const OptionsItemList = styled(motion.div)`
    overflow: hidden;
    background-color: ${props => props.theme.colorBG2};
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;  
`

const OpenCloseButton = styled(motion.div)`
    height: 120px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left:-5px;
    top: 50%;
    background-color: transparent;
    background-color: ${props => props.theme.colorBG2};
    transform: translate3d(200%, -50%, 0);
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;

    & > div {
        transform: rotate(${props => props.IsOpen ? "180deg" : "0deg"})!important;
    }

`

const variantsContainer = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const variantsButton = {
    open: { x: "200%", y:"-50%" },
    closed: { x: 0, y:"-50%" },
}

const Options = () => {
    const currentActiveTheme = currentThemeVar();
    
    const isDarkTheme = currentActiveTheme == JSON.stringify(darkTheme); 
    const islightTheme = currentActiveTheme == JSON.stringify(lightTheme);
    const isContrastTheme = currentActiveTheme == JSON.stringify(contrastTheme);

    const [isOptionsOpen, setIsOptionsOpen] = useState(true)

    return (
        <OptionsContainer>
            <OptionsItemList
                animate={isOptionsOpen ? "open" : "closed"}
                variants={variantsContainer}
            >
                <List column>
                    <ListItem>
                        <BaseButton onClick={()=> currentThemeVar(JSON.stringify(darkTheme))}>
                            { isDarkTheme ? 
                                <Icon
                                    Icon={ioniconsSolid.Moon}
                                    size="3"
                                    isActive={true}
                                /> :
                                <Icon
                                    Icon={ioniconsOutline.Moon}
                                    size="2.5"
                                />
                            }
                            
                        </BaseButton>
                    </ListItem>
                    <ListItem>
                        <BaseButton onClick={()=> currentThemeVar(JSON.stringify(lightTheme))}>
                            { islightTheme ? 
                                <Icon
                                    Icon={ioniconsSolid.Sunny}
                                    size="3"
                                    isActive={true}
                                /> :
                                <Icon
                                    Icon={ioniconsOutline.Sunny}
                                    size="2.5"
                                />
                            }
                        </BaseButton>
                    </ListItem>
                    <ListItem>
                        <BaseButton onClick={()=> currentThemeVar(JSON.stringify(contrastTheme))} >
                        { isContrastTheme ?
                            <Icon
                                Icon={ioniconsSolid.Contrast}
                                size="3"
                                isActive={isContrastTheme}
                            /> :
                            <Icon
                                Icon={ioniconsOutline.Contrast}
                                size="2.5"
                            />
                        }
                        </BaseButton>
                    </ListItem>
                </List>

                <Separator/>

                <List column alignment="flex-end">
                    <ListItem>
                        <LinkButton isExternalLink={true} url="https://nextjs.org/docs/basic-features/built-in-css-support">
                            <Icon
                                Icon={ioniconsSolid.LogoLinkedin}
                                size="2"
                            />  
                        </LinkButton>
                    </ListItem>
                    <ListItem>
                        <LinkButton isExternalLink={true} url="https://nextjs.org/docs/basic-features/built-in-css-support">
                            <Icon
                                Icon={ioniconsSolid.LogoGithub}
                                size="2"
                            />  
                        </LinkButton>
                    </ListItem>
                </List>    
            </OptionsItemList>

            <OpenCloseButton 
                onClick={() => setIsOptionsOpen(!isOptionsOpen)} 
                IsOpen={isOptionsOpen}
                animate={isOptionsOpen ? "open" : "closed"}
                variants={variantsButton}
            >
                <Icon
                    Icon={ioniconsSolid.ChevronForward}
                    size="3"
                />
                
            </OpenCloseButton>

        </OptionsContainer>
    )
}

export default Options;
