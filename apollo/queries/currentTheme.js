
import { gql } from '@apollo/client';

export const GET_CURRENT_THEME = gql`
    query getCurrentTheme {
        currentTheme @client 
    }
`;


export default GET_CURRENT_THEME;