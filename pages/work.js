import React, {useState} from 'react';
import { Query } from "../components/";
import ARTICLE_CATEGORIES_QUERY from "../apollo/queries/articleCategories";
import { H1, Container, SpaceParticles, AnimateLetter, MainButton } from '../components';
import styled from 'styled-components'

const FullContainer = styled.div`
	position: absolute;
	width:100%;
	height:100%;
	left:0;
	top:0;
`

const WorkCardsContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(4, 20em);
	gap: 2em;
	padding: 2em;
`
const WorkCard = styled.div`
	width:  20em;
	height:	20em;
	background-color: ${props => props.theme.colorBG3};
	background-image: url("https://www.placecage.com/300/300");
	background-repeat: no-repeat;
	background-position: center;

	${({ isActive }) => isActive && `
		transform: scale(1.1);
    `}
`

const WorkCardContent = styled.div`
	width:  100%;
	height:	100%;
	position: relative;

	&::before {
		content:"";
		position: absolute;
		width:  100%;
		height:	100%;
		background-color: black;
		opacity: 0.6;
	}

	&::after {
		content:"";
		position: absolute;
		width:  100%;
		height:	100%;
		background-color: black;
		opacity: 0.6;
	}
`

const TopLevelFilter = styled.div `
	display: flex;
	align-items: center;
	justify-content: center; 
`

const Work = () => {
	const title1 = `Portfolio`;
	let animDurationColor = 0.1;
	
	const [isCardActive, setIsCardActive] = useState(true)

    return (
		<Container>
			<SpaceParticles/>
			<FullContainer>
				<H1 textAlign="center" textMargin="20px 0 0">
					{
						title1.split('').map((item, i) => {
							if (item == "\n")
							{
								return <br key={i}/>
							}
							animDurationColor += 0.1;
							return <AnimateLetter hasHover key={i} animDuration={animDurationColor}>{item}</AnimateLetter>
						})
					}
				</H1>
				{/* <TopLevelFilter>
					<MainButton>work</MainButton>
					<MainButton>labs</MainButton>
				</TopLevelFilter>
				<TopLevelFilter>
					<MainButton>work</MainButton>
					<MainButton>labs</MainButton>
				</TopLevelFilter> */}
				<WorkCardsContainer>
					<WorkCard isActive={isCardActive}>
						<WorkCardContent>

						</WorkCardContent>
					</WorkCard>	
					<WorkCard/>
					<WorkCard/>
					<WorkCard/>
					<WorkCard/>
					<WorkCard/>
					<WorkCard/>
					<WorkCard/>
				</WorkCardsContainer>
			</FullContainer>
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