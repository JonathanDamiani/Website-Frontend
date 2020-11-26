import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { Options } from '../'
import { Link, animateScroll as scroll } from "react-scroll";
import { device } from '../../styles/breakpoints'
import { Query } from "..";
import  CV_QUERY from "../../apollo/queries/cvQuery";

const Nav = styled.nav`
    position:fixed;
    padding: 1.5em 7em;
    top: 0;
    left:0;
    width:100%;
    z-index:119;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;

    &::before{
        content: '';
        top:0;
        left:0;
        position: absolute;
        background-color: ${props => props.theme.colorBG1};
        opacity: 0.6;
        width: 100%;
        height:100%;
    }

    ${({ navCollapse }) => navCollapse && `
        padding: 0.8em 5em;
        transition: all 0.3s ease;

        &::before{
            opacity: 1;
        }
    `}
    
    @media ${device.mobileLarge} {
		position:fixed;
        padding: 4em 0em;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        overflow: hidden;
        max-width:0;

        ul {
            opacity: 0;
        }
        &::before{
            opacity: 1;
        }

        ${({ isMobileOpen }) => isMobileOpen && `
            max-width:100%;
            
            ul {
                opacity: 1;
            }
        `}
	}
`

const NavContainer = styled.ul`
    position:relative;
    display: flex;
    justify-content: flex-end;
    align-items:center;

    @media ${device.mobileLarge} {
        flex-direction:column;
    }
`

const NavItem = styled.li`
    margin-left: 2em;
    cursor: pointer;

    @media ${device.mobileLarge} {
        margin: 0 0 2em;
    }
`

const MobileButtonContainer = styled.div`
    display: none;

    @media ${device.mobileLarge} {
        display: block;
        margin: 0 0 2em;
        position: fixed;
        top: 10px;
        left: 10px;
        height: 40px;
        width: 40px;
        z-index:20;
        border-radius: 5px;
        background-color: ${props => props.theme.colorBG1};
        border: 2px solid ${props => props.theme.colorBG3};
        z-index:120;

        &::before, &::after {
            content: "";
            width: 30px;
            height: 3px;
            border-radius: 3px;
            background-color: ${props => props.theme.colorBG3};
            position: absolute;
            transition: all 0.3s ease;
        }

        &::before {
            left: 50%;
            top: 10px;
            transition: all 0.3s ease;
            transform:translate(-50%, 0);
        }

        &::after {
            left: 50%;
            bottom: 10px;
            transition: all 0.3s ease;
            transform:translate(-50%, 0);
        }

        ${({ isMobileOpen }) => isMobileOpen && `
            transition: all 0.3s ease;
            
            border: none;
            &::before {
                transform:translate(-50%, -50%) rotate(-45deg);
                top: 45%;
                transition: all 0.3s ease;
            }

            &::after {
                transform:translate(-50%, -50%) rotate(45deg);
                bottom: 49%;
                transition: all 0.3s ease;
            }
        `}
    }
`
const MobileMenuButton = styled.div`
    width: 30px;
    height: 3px;
    border-radius: 5px;
    background-color: ${props => props.theme.colorBG3};;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    ${({ isMobileOpen }) => isMobileOpen && `
        display: none;
    `}
`

const ButtonDownload = styled.a`
    font-size: 1.4em;
    color: ${props => props.theme.fontColor};
    border: 2px solid ${props => props.theme.colorSecondary};
    border-radius: 20px;
    padding: 0.15em 2em 0;
    font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display:flex;
    align-items: center;

    &:hover{
        color: ${props => props.theme.colorPrimary};
        border-color: ${props => props.theme.colorPrimary};
    }

    @media ${device.mobileLarge} {
        font-size: 1.8em;
    }
    
`

const NavLink = styled(Link)`
    font-size: 1.5em;
    color: ${props => props.theme.fontColor};
    font-family: 'Baloo Tamma 2', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    &:hover{
        color: ${props => props.theme.colorPrimary};
        text-decoration: underline;
    }
    @media ${device.mobileLarge} {
        font-size: 1.8em;
    }
`

const NavBar = () => {
    useEffect(() => {
        window.addEventListener('scroll', HandleScroll);
    }, []);

    const [navCollapse, setNavCollapse] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    let HandleScroll = (event) => {
        let scrollTop = event.target.scrollingElement.scrollTop;
        let canSet = true;
        
        if (scrollTop >= 50) {  
            if(canSet)
            {
                setNavCollapse(true);
            } 
            canSet = false;
        } else {
            setNavCollapse(false);
            canSet = true;
        }
    }
    return (
        <>
            <MobileButtonContainer onClick={() => setMobileOpen(!mobileOpen)} isMobileOpen={mobileOpen}>
                <MobileMenuButton isMobileOpen={mobileOpen}/>
            </MobileButtonContainer>
            <Nav navCollapse={navCollapse} isMobileOpen={mobileOpen}>
                <Options/>
                <NavContainer>
                    <NavItem>
                        <NavLink
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            HOME
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            ABOUT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            PORTFOLIO
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Query query={CV_QUERY} id={null}>
                            {({data: {cv}}) => {
                                console.log(cv);
                                return (
                                        <ButtonDownload href={cv.cv_link.url} target="_blank" textSize="4em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">
                                            DOWNLOAD CV
                                        </ButtonDownload>
                                )
                            }}
                        </Query> 
                    </NavItem>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar;
