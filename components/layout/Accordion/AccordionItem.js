import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import { Icon } from '../..';
import AccordionContent from "./AccordionContent";
import { Add } from '@styled-icons/ionicons-solid'

const TitleContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        svg, span {
            color: ${props => props.theme.colorPrimary};
        }
    }
`

const AccordionItemStyle = styled(motion.li)`
    background-color: ${props => props.theme.colorBG1};
    border-radius: 10px;
    padding: 1.5em;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0px;
    }
` 
const LabelAccordion = styled(motion.span)`
    font-size: 1.5em;
    text-align:center;
    text-transform: uppercase;
    color: ${props => props.isActive ? props.theme.colorPrimary : props.theme.colorSecondary};
    margin-left: 20px; 
`

const IconController = styled(Add)`
    position: absolute;
    width: 3em;
    right:0;
    transition:transform 0.2s linear;

    ${({ isActive }) => isActive && `
        transform: rotate(45deg);
    `}

`

const AccordionItem = ({ children, IconName, Title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <AccordionItemStyle layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <TitleContainer layout isActive={isOpen}>
                {IconName && <Icon layout isActive={isOpen} Icon={IconName} size="3" />}
                <LabelAccordion layout isActive={isOpen}> 
                    {Title}
                </LabelAccordion>
                <IconController layout isActive={isOpen} Icon={Add} />
            </TitleContainer>
            {isOpen &&
                <AccordionContent layout>
                    {children}
                </AccordionContent>}
        </AccordionItemStyle>
    );
};

export default AccordionItem;