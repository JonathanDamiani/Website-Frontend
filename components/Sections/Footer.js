/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import React from 'react'
import { Container, TextBlock, SectionWrapper } from '../';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints'

const FooterContainer = styled(SectionWrapper)`
    @media ${device.largeDesktop} {
		padding: 1em 8em;
	}

	@media ${device.desktop} {
		padding: 1.5em 6em;
	}
`
const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <TextBlock>
                    Feel free to contact me: jdeandamianiapps@gmail.com
                </TextBlock>
                <TextBlock>
                    Copyright © 2020 Jonathan Dean Damiani 
                </TextBlock>
                <TextBlock>
                    Made with Next.js and Strapi
                </TextBlock>
            </FooterContainer>
        </Container>
    )
}

export default Footer;