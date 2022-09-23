import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div id='stars'/>
    <div id='stars2'/>
    <div id='stars3'/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
