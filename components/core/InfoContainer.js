/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components';
import { device } from '../../styles/breakpoints'

const InfoContainer = styled.div`
	position:relative;
	display:block;

	@media ${device.largeDesktop} {
		width: 48%;
	}

	@media ${device.desktop} {
		width: 48%;
	}

	@media ${device.laptop}{
		width: 100%;
	}
	
	@media ${device.tablet} {
		margin-bottom: 4em;

		&:last-child{
			margin:0;
		}
	}

	@media ${device.mobileLarge} {
		margin-top: 1em;
	}

	@media ${device.mobileSmall} {
		
	}
`;

export default InfoContainer;
