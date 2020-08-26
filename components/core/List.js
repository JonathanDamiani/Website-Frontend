import styled from 'styled-components'

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.alignment || "center"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    
    li {
        margin: ${props=> props.column ? "10px 20px" : "0 20px"}
    }
`
export default List;