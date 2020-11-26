
import { gql } from '@apollo/client';

const CV_QUERY = gql`
    query {
        cv {
            cv_link {
                url
            }
        }
    } 
`;

export default CV_QUERY;