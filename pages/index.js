import { Container,H1, H2, AnimateLetter, InfoContainer, SpaceParticles } from '../components';

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
				<H2>
					{
						subtitle.split('').map((item, i) => {
							animDurationText += 0.2;
							return <AnimateLetter opacityAnim key={i} animDuration={animDurationText}>{item}</AnimateLetter>
						})
					}
				</H2>
			</InfoContainer>
		</Container>
	)
}

export default Home;