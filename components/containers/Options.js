import React from 'react';
import styled from 'styled-components';
import { List, ListItem, LinkButton, Icon, BaseButton } from '../'
import * as ioniconsSolid from '@styled-icons/ionicons-solid'
import * as ioniconsOutline from '@styled-icons/ionicons-outline'

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
    return (
        <OptionsContainer>
            <List column>
                <ListItem>
                    <BaseButton>
                        <Icon
                            Icon={ioniconsOutline.Sunny}
                            size="2.5"
                        /> 
                    </BaseButton>
                </ListItem>
                <ListItem>
                    <BaseButton>
                        <Icon
                            Icon={ioniconsOutline.Moon}
                            size="2.5"
                        /> 
                    </BaseButton>
                </ListItem>
                <ListItem hasBottomBorder>
                    <BaseButton>
                        <Icon
                            Icon={ioniconsOutline.Contrast}
                            size="2.5"
                        /> 
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
