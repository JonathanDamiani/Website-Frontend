import React, {useState} from 'react';
import { Query } from "..";
import ARTICLE_CATEGORIES_QUERY from "../../apollo/queries/articleCategories";
import { H2, H3, Container, TextBlock, Icon } from '../';
import styled from 'styled-components'
import * as ioniconsSolid from '@styled-icons/ionicons-solid'
import * as ioniconsOutline from '@styled-icons/ionicons-outline'

const SemiSection = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    height: 50vh;
    position:relative;
    padding: 4em 40em;
`
const SkillsContainerWrapper = styled.div`
    position:relative;
    background-color: ${props => props.theme.colorBG3};
	padding: 2em;
    display: flex;
    justify-content: center;
`

const SkillsContainer = styled.div`
    background-color: ${props => props.theme.colorBG3};
    position: absolute;
    margin-top: -130px;
	padding: 2em;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 8px 32px -9px rgba(0,0,0,0.75);
    z-index: 200;
`

const SkillColumn = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 2em 6em;
    border-right: 1px solid ${props => props.theme.colorPrimary};
    &:last-child{
        border: none;
    }
`

const SkillList = styled.ul`

`
const SkillItem = styled.li`
    text-align: center;
    color: ${props => props.theme.fontColorNegative};
    font-size: 1.3em;
    font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin-bottom: 10px;
`

const About = () => {
    return (
		<Container bg2>
            <SemiSection>
                <H2 textSize="3em" asTitle textAlign="center" textMargin="20px 0 10px">
                    About Myself
                </H2>
                <TextBlock>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </TextBlock>
            </SemiSection>
            <SkillsContainerWrapper>
                <SkillsContainer>
                    <SkillColumn>
                        <Icon
                            Icon={ioniconsOutline.GameController}
                            size={"4"}
                            isActive={true}
                            hasMargin={true}
                            iconMargin={"0"}
                        />
                        <H3 textSize="2em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">Game</H3>
                        <SkillList>
                            <SkillItem>
                                Unreal
                            </SkillItem>
                            <SkillItem>
                                Unity
                            </SkillItem>
                            <SkillItem>
                                C++
                            </SkillItem>
                            <SkillItem>
                                Unreal
                            </SkillItem>
                            <SkillItem>
                                Unity
                            </SkillItem>
                            <SkillItem>
                                C++
                            </SkillItem>
                            <SkillItem>
                                Unreal
                            </SkillItem>
                            <SkillItem>
                                Unity
                            </SkillItem>
                            <SkillItem>
                                C++
                            </SkillItem>
                        </SkillList>
                    </SkillColumn>
                    <SkillColumn>
                        <Icon
                            Icon={ioniconsOutline.CodeSlash}
                            size={"4"}
                            isActive={true}
                            hasMargin={true}
                            iconMargin={"0"}
                        />
                        <H3 textSize="2em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">Game</H3>
                        <SkillList>
                            <SkillItem>
                                HTMl5
                            </SkillItem>
                            <SkillItem>
                                CSS3
                            </SkillItem>
                            <SkillItem>
                                React.js
                            </SkillItem>
                            <SkillItem>
                                React.js
                            </SkillItem>
                            <SkillItem>
                                React.js
                            </SkillItem>
                        </SkillList>
                    </SkillColumn>
                    <SkillColumn>
                        <Icon
                            Icon={ioniconsOutline.CodeSlash}
                            size={"4"}
                            isActive={true}
                            hasMargin={true}
                            iconMargin={"0"}
                        />
                        <H3 textSize="2em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">Game</H3>
                        <SkillList>
                            <SkillItem>
                                HTMl5
                            </SkillItem>
                            <SkillItem>
                                CSS3
                            </SkillItem>
                            <SkillItem>
                                React.js
                            </SkillItem>
                            <SkillItem>
                                React.js
                            </SkillItem>
                            <SkillItem>
                                React.js
                            </SkillItem>
                        </SkillList>
                    </SkillColumn>

                </SkillsContainer>
            </SkillsContainerWrapper>
		</Container>
    )
}

export default About;