import { ApolloClient, InMemoryCache } from '@apollo/client';
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { cache } from "./cache"

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.API_URL || "http://localhost:1337";

const link = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: GRAPHQL_URL + "/graphql"
});

export default withApollo(
    ({ initialState }) =>
    new ApolloClient({
        link: link,
        cache: cache.restore(initialState || {})
    })
);