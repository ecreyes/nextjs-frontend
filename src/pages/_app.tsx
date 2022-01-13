import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
