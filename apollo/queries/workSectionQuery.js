
import { gql } from '@apollo/client';

const WORK_SECTION_QUERY = gql`
    query {
        portflolioSection {
            title
            subtitle
        }
    } 
`;

export default WORK_SECTION_QUERY;