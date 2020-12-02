/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

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