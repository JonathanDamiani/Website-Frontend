import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { List, ListItem, LinkButton, Icon } from '../';
import { currentThemeVar } from '../../utils/cache';
import * as ioniconsSolid from '@styled-icons/ionicons-solid';

const OptionsContainer = styled.div`
    position:fixed;
    z-index:120;
    left:0px;
    top:0%;
`

const OptionsItemList = styled(motion.div)`
    overflow: hidden;
    background-color: ${props => props.theme.colorBG1};
    border-bottom-right-radius: 10px;
    box-shadow: 7px 6px 29px -1px rgba(0,0,0,0.75);
`

const Options = () => {
    return (
        <OptionsContainer>
            <OptionsItemList>
                <List column alignment="flex-end">
                    <ListItem>
                        <LinkButton isExternalLink={true} url="https://nextjs.org/docs/basic-features/built-in-css-support">
                            <Icon
                                Icon={ioniconsSolid.LogoLinkedin}
                                size="4"
                            />  
                        </LinkButton>
                    </ListItem>
                    <ListItem>
                        <LinkButton isExternalLink={true} url="https://nextjs.org/docs/basic-features/built-in-css-support">
                            <Icon
                                Icon={ioniconsSolid.LogoGithub}
                                size="4"
                            />  
                        </LinkButton>
                    </ListItem>
                </List>    
            </OptionsItemList>
        </OptionsContainer>
    )
}

export default Options;
