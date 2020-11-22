
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
            contact
        }
    } 
`;

export default HOME_QUERY;