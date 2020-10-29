import React, {useState} from 'react';
// import { Query } from "..";
// import ARTICLE_CATEGORIES_QUERY from "../../apollo/queries/articleCategories";
import { H2, Container, WorkCard } from '../';
import styled from 'styled-components'

const WorkCardsContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(3, 30em);
	gap: 2em;
	padding: 2em;
`

const Work = () => {
    return (
		<Container bg2>
			<H2 asTitle contrastColor textAlign="center" textMargin="20px 0 10px">
				Portfolio
			</H2>
			<WorkCardsContainer>
				<WorkCard
					url="https://www.youtube.com/"
					urlCall = "Youtube"
					projectImage="https://www.placecage.com/500/500"
					title="Amazing Project"
					description= "Lorem ipsun dar sdews case rnasod a cpoqka asdjasdlajd"
					shortDescription= "Lorem ipsun dar sdews case rnasod a cpoqka asdjasdlajd"
					techList={["teste", "more", "mais um"]}
				/>
				<WorkCard/>
				<WorkCard/>
				<WorkCard/>
				<WorkCard/>
				<WorkCard/>
			</WorkCardsContainer>
		</Container>
    )
}

export default Work;


/* <Query query={ARTICLE_CATEGORIES_QUERY} id={null}>
	{({data: {articleCategories}}) => {
		console.log(articleCategories)
		return (
			<div>	
				Done
			</div>
		)
	}}
</Query> */