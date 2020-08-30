import { makeVar, InMemoryCache } from '@apollo/client';
import { darkTheme } from '../styles/themes'

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                currentTheme: {
                    read() {
                        return currentThemeVar();
                    }
                }
            }
        }
    }
});


export const currentThemeVar = makeVar(JSON.stringify(darkTheme));