import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="ycem-icon"
          href="https://res.cloudinary.com/josephine19001/image/upload/v1698596639/YCEM/dngi9za535p5lmoku7gr.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export async function getInitialProps(
  ctx: DocumentContext
): Promise<DocumentInitialProps> {
  const sheet = new ServerStyleSheet();
  const originalRenderedPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderedPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
}

Document.getInitialProps = getInitialProps;

export default Document;
