import React from 'react';
import Head from "next/head";
import { ApolloProvider, useQuery } from '@apollo/client';
import { ThemeProvider } from 'styled-components'
import { NavBar, Options, PageWrapper, Query} from "../components"
import withData from "../utils/apollo";
import { currentThemeVar } from "../utils/cache";
import GET_CURRENT_THEME from "../apollo/queries/currentTheme";
import '../styles/globals.css';

const App = ({ Component, pageProps, apollo }) => {
	return (
		<ApolloProvider client={apollo}>
				<Head>
					<title>Website</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
			<Query query={GET_CURRENT_THEME} id={null}>
				{() => {
					return (
						<ThemeProvider theme={JSON.parse(currentThemeVar())}> 
							<Options/>
							<NavBar/>
							<PageWrapper>
								<Component {...pageProps} />
							</PageWrapper>
						</ThemeProvider>
					)
				}}
			</Query>
		</ApolloProvider>
	)
};

// Wraps all components in the tree with the data provider
export default withData(App);