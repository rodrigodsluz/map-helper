import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Router from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';

import ToastNotification from '@components/Toastify';

import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ToastNotification />

      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>
      {/* Google Analytics Script */}

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
