/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import { gql } from '@apollo/client';

const SKILLS_QUERY = gql`
    query {
        skillCategories {
            name
            Position
            skill_subcategories {
                name
                skills {
                    name
            }
            }
        }
    } 
`;

export default SKILLS_QUERY;