import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="lifeasier, delivery, next, nextjs, react, menu, cardápio, digital, cardápio delícia"
          />
          <meta name="author" content="Cardápio Delícia" />
          <meta name="copyright" content="© Cardápio Delícia" />

          <link rel="canonical" href="https://www.cardapiodelicia.com.br/" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800&display=swap"
          />
          <link rel="apple-touch-icon" href="/icons/cd-icon.png" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#FF8C00" />

          <meta charSet="utf-8" />
        </Head>

        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
