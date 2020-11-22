import React, {useState} from 'react';
import { Query } from "..";
import ABOUT_QUERY from "../../apollo/queries/aboutQuery";
import SKILLS_QUERY from "../../apollo/queries/skillsQuery";
import { H2, H3, Container, TextBlock, Icon, InfoContainer, SectionWrapper, HTMLTextContainer } from '../';
import styled from 'styled-components'
import * as ioniconsOutline from '@styled-icons/ionicons-outline'
import { device } from '../../styles/breakpoints'
import parse from 'html-react-parser';

const SectionBG = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    width:100%;
`
const SkillsContainer = styled.div`
    background-color: ${props => props.theme.colorBG3};
    padding: 2em 0;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 8px 32px -9px rgba(0,0,0,0.75);
    z-index: 2;

    @media ${device.largeDesktop} {
        width: 50%;
	}

	@media ${device.desktop} {
        width: 50%;
	}

	@media ${device.laptop}{
        width: 60%;
	}
	
	@media ${device.tablet} {
        width: 100%;
	}
`

const SkillColumn = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction:column;
    align-items: center;
    padding: 0.6em;
    border-right: 1px solid ${props => props.theme.colorPrimary};
    width: 30%;
    order: ${props => props.position};
    
    &:last-child{
        border: none;
    }
`

const SkillList = styled.ul`

`
const SkillItem = styled.li`
    text-align: center;
    color: ${props => props.theme.fontColorNegative};
    font-size: 1em;
    font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin-bottom: 10px;
`
const SkillItemTitle = styled(SkillItem)`
    font-size: 1.2em;
    font-weight: bold;
    margin: 15px 0;

    &:first-child{
        margin-top: 0;
    }
`

const AboutInfoContainer = styled(InfoContainer)`
    @media ${device.largeDesktop} {
        width: 46%;
	}

	@media ${device.desktop} {
        width: 46%;
	}

	@media ${device.laptop}{
        width: 40%;
	}
	
	@media ${device.tablet} {
        width: 100%;
	}
`

const About = () => {
    let iconsSkills = [
        ioniconsOutline.Library,
        ioniconsOutline.GameController,
        ioniconsOutline.CodeSlash,
    ]

    return (
		<Container bg2 id="about">
            <SectionBG>
                <SectionWrapper>
                    <Query query={ABOUT_QUERY} id={null}>
                        {({data: {about}}) => {
                            let description = about.description.split("\n");
                            return (
                                    <AboutInfoContainer>
                                        <H2 textSize="3em" asTitle textAlign="left" textMargin="0 0 10px">
                                            {about.title}
                                        </H2>
                                        <HTMLTextContainer>
                                            {parse(about.description)}
                                        </HTMLTextContainer>
                                    </AboutInfoContainer>
                            )
                        }}
                    </Query> 
                    <Query query={SKILLS_QUERY} id={null}>
                        {({data: {skillCategories}}) => { 
                            let SkillSorted = skillCategories.slice().sort((a, b) => {
                                return a.Position - b.Position;
                            });

                            return (
                                <SkillsContainer>
                                    {
                                        SkillSorted.map((col, idx) => {
                                            return (
                                                <SkillColumn key={idx}>
                                                    <Icon
                                                        Icon={iconsSkills[idx]}
                                                        size={"3"}
                                                        isActive={true}
                                                        hasMargin={true}
                                                        iconMargin={"0"}
                                                    />
                                                    <H3 textSize="1.8em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">{col.name}</H3>
                                                    {
                                                        col.skill_subcategories.map((cat, idx2) => {
                                                            return (
                                                                <SkillList key={idx2}>
                                                                    <SkillItemTitle>
                                                                        {cat.name}
                                                                    </SkillItemTitle>
                                                                    {
                                                                        cat.skills.map((skill, idx3) => {
                                                                            return (
                                                                                <SkillItem key={idx3}>
                                                                                    {skill.name}
                                                                                </SkillItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </SkillList>
                                                            )
                                                        })
                                                    }
                                                </SkillColumn>
                                            )
                                        })
                                    } 
                                </SkillsContainer>
                            )
                        }}
                    </Query> 
                </SectionWrapper>
            </SectionBG>
		</Container>
    )
}

export default About;