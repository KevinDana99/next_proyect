import React from 'react'
import Footer from '../src/components/Footer'
import type { AppProps } from 'next/app'
import { Wrapper } from './app_styled'
import  './app.css';
import Nabvar from '../src/components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import useApollo from '../hooks/useApollo';

const client = useApollo();

export default function MyApp({ Component, pageProps }: AppProps) {

  return<ApolloProvider client={client}><Wrapper><Nabvar/> <Component {...pageProps} /><Footer/></Wrapper></ApolloProvider>
}