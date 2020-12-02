/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

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