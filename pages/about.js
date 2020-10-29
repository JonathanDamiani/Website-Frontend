import { Container,H1, H2, AnimateLetter, InfoContainer } from '../components';

const About = () => {

    const title1 = `About Me`;
	const subtitle = "Programmer, Game Designer, Web developer.";
	let animDurationColor = 0.1;
	let animDurationText = 2;

    return (
        <Container>
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

export default About;
