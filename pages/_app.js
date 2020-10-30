import React from 'react';
import Head from "next/head";
import { ApolloProvider, useQuery } from '@apollo/client';
import { ThemeProvider } from 'styled-components'
import { NavBar, Options, PageWrapper, Query} from "../components"
import withData from "../utils/apollo";
import { currentThemeVar } from "../utils/cache";
import GET_CURRENT_THEME from "../apollo/queries/currentTheme";
import GlobalStyles from  "../styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = ({ Component, pageProps, apollo }) => {

	return (
		<ApolloProvider client={apollo}>
				<Head>
					<title>Website</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet"/>
				</Head>
			<Query query={GET_CURRENT_THEME} id={null}>
				{() => {
					return (
						<ThemeProvider theme={JSON.parse(currentThemeVar())}> 
							<GlobalStyles/>
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