import styled from 'styled-components';
import { motion } from "framer-motion"

const AccordionList = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colorBG2};
    padding: 20px;
    border-radius: 25px;
`

export default AccordionList;