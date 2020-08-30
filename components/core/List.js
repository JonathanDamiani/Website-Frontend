import styled from 'styled-components'

const List = styled.ul`
    display: flex;
    align-items: center;
    margin: 1em 0;
    justify-content: ${(props) => props.alignment || "center"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    
    li {
        margin: ${props=> props.column ? "0.8em 1.4em" : "0 1.2em"}
    }
`
export default List;