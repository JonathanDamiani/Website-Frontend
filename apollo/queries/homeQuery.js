
import { gql } from '@apollo/client';

const HOME_QUERY = gql`
    query {
        home {
            presentation
            subtitle
            description
            picture {
                url
            }
        }
    } 
`;

export default HOME_QUERY;