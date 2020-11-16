import React from 'react';
import { Query } from "..";
import WORK_QUERY from "../../apollo/queries/workQuery";
import WORK_SECTION_QUERY from "../../apollo/queries/workSectionQuery";
import { H2, Container, WorkCard, SectionWrapper } from '../';

import styled from 'styled-components'

const WorkContainer = styled.div`
	padding-top: 4em;
`

const WorkCardsContainer = styled.div`
	display: grid;
	width:100%;
	justify-content: space-between;
	grid-template-columns: repeat(2, 50em);
	gap: 4em;
`

const Work = () => {
    return (
		<Container bg2>
			<WorkContainer>
			<Query query={WORK_SECTION_QUERY} id={null}>
						{({data: {portflolioSection}}) => {
							return (
									<H2 textSize="4em" asTitle contrastColor textAlign="center" textMargin="0px 0 10px">
										{portflolioSection.title}
									</H2>
							)
						}}
					</Query> 
				<SectionWrapper>
					<Query query={WORK_QUERY} id={null}>
						{({data: {workPieces}}) => {
							console.log(workPieces);
							return (
									<WorkCardsContainer>
										{workPieces.map((item, idx) => {
											return(		
												<WorkCard
													key={idx}
													urlCall={item.link_btn_out.cta}
													url = {item.link_btn_out.link}
													projectImage={item.thumbnail.url}
													title={item.title}
													shortDescription= {item.short_description}
													techList={item.skills}
													projectImageList={item.images}
													fullDescription= {item.full_description}
												/>
											)
										})}
									</WorkCardsContainer>
							)
						}}
					</Query> 
				</SectionWrapper>
			</WorkContainer>
		</Container>
    )
}

export default Work;