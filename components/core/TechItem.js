/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const TechItem = styled.li `
    font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.5em;
    margin-right: 10px;
    background-color: ${props => props.theme.colorPrimary};
    margin-top: 8px;

	@media ${device.largeDesktop} {
        font-size: 1.5em;
	}

	@media ${device.desktop} {
        font-size: 1em;
	}

	@media ${device.laptop}{
		grid-template-columns: repeat(3, 1fr);
		gap: 4em;
	}
	
	@media ${device.tablet} {
		grid-template-columns: repeat(3, 1fr);
		gap: 4em;
	}
	
	@media ${device.mobileLarge} {
		grid-template-columns: repeat(3, 1fr);
		gap: 4em;
	}
`

export default TechItem;