
import { gql } from '@apollo/client';

const ABOUT_QUERY = gql`
    query {
        about {
            title
            description
        }
    } 
`;

export default ABOUT_QUERY;