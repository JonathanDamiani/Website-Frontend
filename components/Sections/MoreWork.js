/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import React from 'react';
import { Query } from "..";
import SEC_PROJECTS_QUERY from "../../apollo/queries/secProjectsQuery";
import OTHER_WORK_QUERY from "../../apollo/queries/otherWorkQuery";
import { Container, SectionWrapper, H2, H3, ListOfTech, TechItem, TextBlock, MainButton, HTMLTextContainer } from '../';
import parse from 'html-react-parser';
import { device } from '../../styles/breakpoints'

import styled from 'styled-components'

const MoreWorkContainer = styled.div`
	padding-top: 4em;
`
const MoreWorkSubtitle = styled(TextBlock)`
	text-align: center;
`

const MoreWorkCardWrapper = styled(SectionWrapper)`
	position: relative;
	display: grid;
	margin: 0 auto;
	align-items: initial;
	justify-content: initial;	
	flex-wrap: wrap;

	@media ${device.largeDesktop} {
		grid-template-columns: repeat(3, 1fr);
		gap: 4em;
	}

	@media ${device.desktop} {
		grid-template-columns: repeat(3, 1fr);
		gap: 4em;
	}

	@media ${device.laptop}{
		grid-template-columns: repeat(2, 1fr);
	}
	
	@media ${device.mobileLarge} {
		grid-template-columns: repeat(1, 1fr);
	}
`

const ProjectCard = styled.div`
	width: 100%;
	background-color: ${props => props.theme.colorBG4};
	display: flex;
	position: relative;
	flex-direction: column;
	border-radius:20px;
	overflow: hidden;
	-webkit-box-shadow: 3px 2px 10px 1px rgba(0,0,0,0.37); 
	box-shadow: 3px 2px 10px 1px rgba(0,0,0,0.37);
`

const ImageContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 56.25%;
	background-image: url(${props => props.imageUrl});
	background-size:cover;
`

const ProjectContentInfo = styled.div`
	padding: 2em 2em 5em;
	height:100%;
`
const ProjectButtonContainer = styled.div`
	position: absolute;
	bottom:1em;
	left:50%;
	transform: translateX(-50%);
`

const ProjectDescripton = styled(HTMLTextContainer)`
	margin-top: 1em;
	a {
		color: ${props => props.theme.colorPrimary};
		text-decoration: underline;
		font-family:'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size:1.5em;
	}
	strong {
		color: ${props => props.theme.colorPrimary};
	}
`

const VideoContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 56.25%;
`

const VideoFrame = styled.iframe`
    position: absolute;
    top: 0;
    height: 100%;
	width: 100%;
    z-index: 700;
`

const MoreWork = () => {
    return (
		<Query query={OTHER_WORK_QUERY} id={null}>
		{({data: {otherWork}}) => {
			if (otherWork.can_show) {
				return(
					<Container bg2>
						<MoreWorkContainer>
							<H2 textSize="4em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">
								{otherWork.title}
							</H2>
							{
								otherWork.description && <MoreWorkSubtitle contrastColor textSize="2em">{otherWork.description}</MoreWorkSubtitle>
							}
						</MoreWorkContainer>
						<Query query={SEC_PROJECTS_QUERY} id={null}>
								{({data: {projects}}) => {
									console.log(projects);
									let projectsPieces = projects.slice().sort((a, b) => {
										return a.position - b.position;
									});
									return(
										<MoreWorkCardWrapper>
											{
												projectsPieces.map((item, idx) => {
													return(
														<ProjectCard key={idx}>
															{
																item.video_id ?
																<VideoContainer>
																	<VideoFrame
																		src={`https://www.youtube.com/embed/${item.video_id}`}
																		frameBorder="0"
																		allowFullScreen
																	/>
																</VideoContainer>
																:
																<ImageContainer imageUrl={item.image.url}/>
															}
															<ProjectContentInfo>
																<H3 textSize="1.8em" contrastColor asTitle textAlign="center" textMargin="0 0 0">{item.title}</H3>
																<ListOfTech>
																	{
																		item.skills.map((skill, idx2) =>{
																			return(
																				<TechItem key={idx2}>{skill.name}</TechItem>
																			)
																		})
																	}
																</ListOfTech>
																<ProjectDescripton contrastColor>
																	{parse(item.description)}
																</ProjectDescripton>
																{
																	item.cta && <ProjectButtonContainer>
																					{
																						item.can_download ?
																							<MainButton url={item.cta.link} download>{item.cta.cta}</MainButton>
																						:
																						<MainButton isExternalLink url={item.cta.link}>{item.cta.cta}</MainButton>
																					}
																					
																				</ProjectButtonContainer>
																}
															</ProjectContentInfo>
														</ProjectCard>
													)
												})
											}
										</MoreWorkCardWrapper>
									)
								}}
							</Query>
					</Container>
				)			
			}
			else 
			{
				return (
					<></>
				)
			}
		}}
		</Query>
		
    )
}

export default MoreWork;