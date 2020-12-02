/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import styled from 'styled-components'
import { motion } from "framer-motion"

const ListItem = styled(motion.li)`
    ${({ isFullWidth }) => isFullWidth && `
		width: 100%;
	`}
	margin-right:1.5em;
	
	&:last-child{
		margin-right:0;
	}
`
export default ListItem;