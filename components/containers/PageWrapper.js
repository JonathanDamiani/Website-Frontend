import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

const PageWrapperStyle = styled(motion.div) `
    color: ${props => props.theme.fontColor};
    overflow: hidden;
`

const PageWrapper = ({children}) => {
	const router = useRouter();
    return (
        <PageWrapperStyle key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ duration: 1 }} variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            },
        }}>
            {children}
        </PageWrapperStyle>
    )
}
export default PageWrapper;
