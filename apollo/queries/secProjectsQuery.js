/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import { gql } from '@apollo/client';

const SEC_PROJECTS_QUERY = gql`
    query {
        projects {
            title
            description
            position
            video_id
            can_download
            skills {
                name
            }
            image {
                url
            }
            cta{
                cta
                link
            }
        }
    } 
`;

export default SEC_PROJECTS_QUERY;