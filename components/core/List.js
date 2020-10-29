import styled from 'styled-components'
import { motion } from "framer-motion"

const List = styled(motion.ul)`
    display: flex;
    align-items: center;
    margin: 1em 0;
    justify-content: ${(props) => props.alignment || "center"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    flex-wrap:wrap;
    
    li {
        margin: ${props=> props.column ? "0.8em 1.4em" : "0 1.3em"}
    }
`
export default List;