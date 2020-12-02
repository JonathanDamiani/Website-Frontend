/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { List, ListItem, LinkButton, Icon } from '../';
import { currentThemeVar } from '../../utils/cache';
import * as ioniconsSolid from '@styled-icons/ionicons-solid';

const OptionsItemList = styled(motion.div)`
    overflow: hidden;
`

const Options = () => {
    return (
        <OptionsItemList>
            <List alignment="flex-end">
                <ListItem>
                    <LinkButton isExternalLink={true} url="https://www.linkedin.com/in/jonathan-dean-de-melo-damiani-638b74142/">
                        <Icon
                            Icon={ioniconsSolid.LogoLinkedin}
                            size="3"
                            hasHover
                        />  
                    </LinkButton>
                </ListItem>
                <ListItem>
                    <LinkButton isExternalLink={true} url="https://github.com/JonathanDamiani">
                        <Icon
                            Icon={ioniconsSolid.LogoGithub}
                            size="3"
                            hasHover
                        />  
                    </LinkButton>
                </ListItem>
            </List>    
        </OptionsItemList>
    )
}

export default Options;
