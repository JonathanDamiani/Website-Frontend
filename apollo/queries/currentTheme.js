/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 *  @summary: Define local query state manangement
 */

import { gql } from '@apollo/client';

export const GET_CURRENT_THEME = gql`
    query getCurrentTheme {
        currentTheme @client 
    }
`;


export default GET_CURRENT_THEME;