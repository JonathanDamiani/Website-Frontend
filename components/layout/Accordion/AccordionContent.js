import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const AccordionContentWrapper = styled(motion.div)`
    padding: 0 2em;
    max-height: 20vh;
    overflow-y: auto;
`

const AccordionContent = ({ children }) => {
    return (
        <AccordionContentWrapper
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </AccordionContentWrapper>
    );
};

export default AccordionContent;