import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import { List, ListItem, LinkButton, Icon } from '../'
import * as ioniconsSolid from '@styled-icons/ionicons-solid'
import * as ioniconsOutline from '@styled-icons/ionicons-outline'

const Nav = styled.nav`
    position:fixed;
    bottom: 0;
    background-color: ${props => props.theme.colorBG2};
    width:100%;
` 

const TextLink = styled.span`
    position:absolute;
    font-size: 1.5em;
    text-align:center;
    left:20px;
    transform: translate(-50%);
    color: ${props => props.theme.colorPrimary};
    opacity:0;
`

const NavBar = () => {
    return (
        <Nav className="container">
            <List alignment="center">
                <ListItem>
                    <Link href="/">
                        <LinkButton  
                            LinkIcon={ioniconsOutline.Home}
                            LinkIconActive={ioniconsSolid.Home}
                            hasText={true}
                            href="/"
                        >
                        <TextLink>
                            Home
                        </TextLink>
                        </LinkButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/about">
                        <LinkButton 
                            LinkIcon={ioniconsOutline.Person}
                            LinkIconActive={ioniconsSolid.Person}
                            hasText={true}
                            href="/about"
                        >
                            <TextLink>
                                About
                            </TextLink>
                        </LinkButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/skills">
                        <LinkButton
                            LinkIcon={ioniconsOutline.Library}
                            LinkIconActive={ioniconsSolid.Library}
                            hasText={true}
                            href="/skills"
                        >
                            <TextLink>
                                Skills
                            </TextLink>
                        </LinkButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/work">
                        <LinkButton 
                            LinkIcon={ioniconsOutline.CodeSlash}
                            LinkIconActive={ioniconsSolid.CodeSlash}
                            hasText={true}
                            href="/work"
                        >
                            <TextLink>
                                Portfolio
                            </TextLink>
                        </LinkButton>

                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/contact">
                        <LinkButton 
                            LinkIcon={ioniconsOutline.Mail}
                            LinkIconActive={ioniconsSolid.Mail}
                            hasText={true}
                            href="/contact"
                        >
                            <TextLink>
                                Contact
                            </TextLink>
                        </LinkButton>
                    </Link>
                </ListItem>
            </List>
        </Nav>
    )
}

export default NavBar;
