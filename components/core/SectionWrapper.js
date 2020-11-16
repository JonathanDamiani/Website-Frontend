import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const SectionWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 2000px;
    padding: 5em 16em;
    ${({ fullHeight }) => fullHeight && `
		height: 100vh;
	`}
`
export default SectionWrapper;
