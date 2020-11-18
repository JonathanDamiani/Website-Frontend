import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const SectionWrapper = styled.div`
	position: relative;
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;

	${({ fullHeight }) => fullHeight && `
		height: 100vh;
	`}
	
	@media ${device.largeDesktop} {
		max-width: 2000px;
		padding: 4em 8em;
	}

	@media ${device.desktop} {
		max-width: 1300px;
		padding: 4em 6em;
	}

	@media ${device.laptop}{
		max-width: 990px;
		padding: 4em 4em;
	}
	
	@media ${device.tablet} {
		max-width: 700px;
		flex-direction: column;
		justify-content: center;
	}
	
	@media ${device.mobileLarge} {
		padding-top: 6em;
		justify-content: flex-start;
		height: auto;
	}

	@media ${device.mobileSmall} {
		
	}
`
export default SectionWrapper;
