/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import { gql } from '@apollo/client';

const WORK_QUERY = gql`
    query {
        workPieces {
            title
            short_description
            full_description
            position
            video_id
            skills {
                name
            }
            thumbnail
            {
                url
            }
            images {
                url
            }
            info_btn{
                cta
                link
            }
            link_btn_out {
                cta
                link
            }
            link_btn_in {
                cta
                link
            }
        }
    } 
`;

export default WORK_QUERY;