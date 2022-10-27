import React from 'react'
import Footer from '../src/components/Footer'
import type { AppProps } from 'next/app'
import { Wrapper } from './app_styled'
import  './app.css';
import Nabvar from '../src/components/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return<Wrapper><Nabvar/> <Component {...pageProps} /><Footer/></Wrapper>
}