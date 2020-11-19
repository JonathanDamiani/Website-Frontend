import React from 'react';
import { Query } from "..";
import WORK_QUERY from "../../apollo/queries/workQuery";
import WORK_SECTION_QUERY from "../../apollo/queries/workSectionQuery";
import { H2, Container, WorkCard, SectionWrapper } from '../';
import { device } from '../../styles/breakpoints'

import styled from 'styled-components'

const WorkContainer = styled.div`
	padding-top: 4em;
`

const WorkCardWrapper = styled(SectionWrapper)`
	@media ${device.mobileSmall} {
		padding:3em;
	}
`

const WorkCardsContainer = styled.div`
	display: flex;
	width:100%;
	padding:0 1em;
	justify-content: space-between;
	flex-wrap:wrap;

	@media ${device.mobileSmall} {
		padding:0;
	}
`

const Work = () => {
    return (
		<Container bg2 id="work">
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
				<WorkCardWrapper>
					<Query query={WORK_QUERY} id={null}>
						{({data: {workPieces}}) => {
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
				</WorkCardWrapper>
			</WorkContainer>
		</Container>
    )
}

export default Work;