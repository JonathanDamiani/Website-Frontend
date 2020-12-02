/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

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