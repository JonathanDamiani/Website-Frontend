import styled from 'styled-components'
import { motion } from "framer-motion"

const ListItem = styled(motion.li)`
    ${({ isFullWidth }) => isFullWidth && `
		width: 100%;
	`}
`
export default ListItem;