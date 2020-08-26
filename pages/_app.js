import React, { useState } from 'react';
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/themes'
import { NavBar, Options, PageWrapper} from "../components"
import withData from "../utils/apollo";
import '../styles/globals.css';

const App = ({ Component, pageProps, apollo }) => {
	const [currentTheme, setCurrentTheme] = useState(darkTheme);	
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={currentTheme}> 
				<Head>
					<title>Website</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<Options/>
				<NavBar/>
				<PageWrapper>
					<Component {...pageProps} />
				</PageWrapper>
			</ThemeProvider>
		</ApolloProvider>
	)
};

// Wraps all components in the tree with the data provider
export default withData(App);