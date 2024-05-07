import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '@components/Layout';

import GlobalStyle from '../src/styles/GlobalStyle';
import theme from '../src/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
