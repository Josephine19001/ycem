import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../src/components/shared/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <>
        <DefaultSeo
          openGraph={{
            type: "ycem.org",
            locale: "en_IE",
            url: "https://ycem.org",
            siteName: "YCEM",
            title: "Your Choice in Engineering Matters",
            description: "Empowering HER Future in ENGINEERING",
          }}
          twitter={{
            handle: "@ycem_project",
            site: "@https://ycem.org",
          }}
        />
        <Component {...pageProps} />
      </>
    </Layout>
  );
};

export default App;
