import { About, Footer, Home, MoreWork, Work } from '../components';
import styled from 'styled-components';

const SectionsWrapper = styled.div`
	section:nth-child(even) {
		background-color: ${props => props.theme.colorBG4};
	} 
`

const Index = () => {

	return (
		<>	
			<Home/>
			<SectionsWrapper>
				<About/>
				<Work/>
				<MoreWork/>
			</SectionsWrapper>
			<Footer/>

		</>
	)
}

export default Index;