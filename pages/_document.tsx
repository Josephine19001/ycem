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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
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
