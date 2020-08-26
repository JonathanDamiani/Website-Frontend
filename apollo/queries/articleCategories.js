import gql from "graphql-tag";

const ARTICLE_CATEGORIES_QUERY = gql`
    query articleCategories {
        articleCategories {
            id
            name
        }
    }
`;

export default ARTICLE_CATEGORIES_QUERY;