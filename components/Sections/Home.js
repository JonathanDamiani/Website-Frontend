import { Container,H1, H2, AnimateLetter, InfoContainer, SpaceParticles, TextBlock } from '../';
import styled from 'styled-components'


const Picture = styled.div`
	position:relative;
	float:right;
	height: 500px;
	width: 500px;
	margin-top: -5em;
	margin-right: 10em;
  //  background-image: url(${props => props.bgImage});
	background-size: contain;
	border-radius: 50%;
	border:5px solid blue;
`

const Home = () => {
	const title1 = `Hi,\n`;
	const title2 = `I'm Jonathan`;

	const subtitle = "Programmer, Game & Web developer.";
	let animDurationColor = 0.1;
	let animDurationText = 2;

	return (
		<Container>
			<SpaceParticles/>
			<InfoContainer leftSide>
				<H1>
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
					{
						title2.split('').map((item, i) => {
							if (item == "\n")
							{
								return <br key={i}/>
							}
							animDurationColor += 0.1;
							return <AnimateLetter hasHover key={i} animDuration={animDurationColor}>{item}</AnimateLetter>
						})
					}
				</H1>
				<H2 textSize="2.5em">
					{
						subtitle.split('').map((item, i) => {
							animDurationText += 0.2;
							return <AnimateLetter opacityAnim key={i} animDuration={animDurationText}>{item}</AnimateLetter>
						})
					}
				</H2>

				<TextBlock>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
				</TextBlock>
			</InfoContainer>
			<InfoContainer rightSide>
				<Picture/>
			</InfoContainer>
		</Container>
	)
}

export default Home;