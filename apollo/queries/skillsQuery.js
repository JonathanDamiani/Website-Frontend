
import { gql } from '@apollo/client';

const SKILLS_QUERY = gql`
    query {
        skillCategories {
            name
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