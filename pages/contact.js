import React, { useEffect } from 'react';
import { Container,H1, AnimateLetter, InfoContainer, SpaceParticles} from '../components';
import styled, { keyframes } from 'styled-components';
import { motion, AnimateSharedLayout } from "framer-motion"

const Contact = () => {
    const title1 = `Skills`;
    let animDurationColor = 0.5;
    
    return (
        <>
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
                    </H1>
                </InfoContainer>
                <InfoContainer rightSide>
                </InfoContainer>
            </Container>
        </>
    )
}



const items = [0, 1, 2, 3, 4];

export default Contact
