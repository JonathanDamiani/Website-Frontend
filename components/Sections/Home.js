import { Container,H1, H2, AnimateLetter, InfoContainer, SpaceParticles, TextBlock, SectionWrapper, HTMLTextContainer } from '../';
import styled from 'styled-components'
import { Query } from "..";
import HOME_QUERY from "../../apollo/queries/homeQuery";
import { device } from '../../styles/breakpoints'
import parse from 'html-react-parser';

const Picture = styled.div`
	position:relative;
	margin: 0 auto;
	height: 30em;
	width: 30em;
	background-image: url(${props => props.bgImage});
	background-size: cover;
	border-radius: 50%;
	border:5px solid ${props => props.theme.colorPrimary};

	@media ${device.tablet} {
		height: 32em;
		width: 32em;
	}

	@media ${device.mobileLarge} {
		height: 17em;
		width: 17em;
		border: 3px solid ${props => props.theme.colorPrimary};
	}
`
const HomeSectionWrapper = styled(SectionWrapper)`
	pointer-events: none;
`
const ContactText = styled(TextBlock)`
	pointer-events: auto;
	
	margin-top: 10px;
	font-weight: bold;
	font-size:1.4em;
	span {
		font-size:1em;
		text-decoration: underline;
	}
`

const Home = () => {
	let animDurationColor = 0.1;
	let animDurationText = 2;

	return (
		<Container id="home">
			<SpaceParticles/>
			<Query query={HOME_QUERY} id={null}>
                {({data: {home}}) => {
					let title = home.presentation.split("\\n");
                    return (
							<HomeSectionWrapper fullHeight>
								<InfoContainer>
									<H1>
										{
											title[0].split('').map((item, i) => {
												if (item == "\n")
												{
													return <br key={i}/>
												}
												animDurationColor += 0.1;
												return <AnimateLetter hasHover key={i} animDuration={animDurationColor}>{item}</AnimateLetter>
											})
										}
										<br/>
										{
											title[1].split('').map((item, i) => {
												if (item == "\n")
												{
													return <br key={i}/>
												}
												animDurationColor += 0.1;
												return <AnimateLetter hasHover key={i} animDuration={animDurationColor}>{item}</AnimateLetter>
											})
										}
									</H1>
									<H2 textSize="2em" textMargin="0 0 10px 0">
										{
											home.subtitle.split('').map((item, i) => {
												animDurationText += 0.2;
												return <AnimateLetter opacityAnim key={i} animDuration={animDurationText}>{item}</AnimateLetter>
											})
										}
									</H2>

									<HTMLTextContainer>
										{parse(home.description)}
									</HTMLTextContainer>
									<ContactText>
										{parse(home.contact)}
									</ContactText>
								</InfoContainer>
								<InfoContainer>
									<Picture bgImage={home.picture.url}/>
								</InfoContainer>
							</HomeSectionWrapper>
                    )
				}}
			</Query>
		</Container>
	)
}

export default Home;
