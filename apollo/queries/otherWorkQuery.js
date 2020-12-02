/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import { gql } from '@apollo/client';

const OTHER_WORK_QUERY = gql`
    query {
        otherWork {
            title
            description
            can_show
        }
    } 
`;

export default OTHER_WORK_QUERY;