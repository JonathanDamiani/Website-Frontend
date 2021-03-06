/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

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