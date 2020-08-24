import Head from "next/head";
import '../styles/globals.css'
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";

const App = ({ Component, pageProps, apollo }) => {
	return (
		<ApolloProvider client={apollo}>
			<Head>
				<title>Website</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Component {...pageProps} />
		</ApolloProvider>
	)
};

// Wraps all components in the tree with the data provider
export default withData(App);