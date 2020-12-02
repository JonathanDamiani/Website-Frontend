/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'
import { motion } from "framer-motion"

const List = styled(motion.ul)`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.alignment || "center"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
`
export default List;