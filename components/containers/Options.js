import React from 'react';
import styled from 'styled-components';
import { List, ListItem, LinkButton, Icon, BaseButton } from '../';
import { currentThemeVar } from '../../utils/cache';
import { lightTheme, darkTheme, contrastTheme } from '../../styles/themes'
import * as ioniconsSolid from '@styled-icons/ionicons-solid';
import * as ioniconsOutline from '@styled-icons/ionicons-outline';

const OptionsContainer = styled.div`
    position:fixed;
    background-color: ${props => props.theme.colorBG2};
`

const Separator = styled.div`
    position: relative;
    display: block;
    background-color:${props => props.theme.colorSecondary};
    height: 2px;
    width:80%;
    margin: 0 auto;
`
const Options = (props) => {
    const currentActiveTheme = currentThemeVar();
    
    const isDarkTheme = currentActiveTheme == JSON.stringify(darkTheme); 
    const islightTheme = currentActiveTheme == JSON.stringify(lightTheme);
    const isContrastTheme = currentActiveTheme == JSON.stringify(contrastTheme);
    return (
        <OptionsContainer>
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
        </OptionsContainer>
    )
}

export default Options;
