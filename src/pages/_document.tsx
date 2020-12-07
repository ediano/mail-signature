import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles} {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://mail-signature.vercel.app/" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="https://reactjs.org/favicon.ico"
            type="image/x-icon"
          />

          <meta
            name="google-site-verification"
            content="Q8PkJkTk-TXDiK2vypP9zEmbP_JHLA0udjgoPCV7aHI"
          />

          <meta name="title" content="Assinatura de e-mail" />
          <meta
            name="description"
            content="Gerador de assinaturas para e-mail, gmail, outlook, hotmail e muito outros"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://mail-signature.vercel.app/"
          />
          <meta property="og:title" content="Assinatura de e-mail" />
          <meta
            property="og:description"
            content="Gerador de assinaturas para e-mail, gmail, outlook, hotmail e muito outros"
          />
          <meta property="og:image" content="./image/screenshot.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://mail-signature.vercel.app/"
          />
          <meta property="twitter:title" content="Assinatura de e-mail" />
          <meta
            property="twitter:description"
            content="Gerador de assinaturas para e-mail, gmail, outlook, hotmail e muito outros"
          />
          <meta property="twitter:image" content="./image/screenshot.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
