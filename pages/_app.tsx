import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../src/components/shared/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <>
        <NextSeo
          openGraph={{
            type: "ycem.org",
            locale: "en_IE",
            url: "https://ycem.org",
            siteName: "YCEM",
            title: "Your Choice in Engineering Matters",
            description:
              "Empowering HER Future in ENGINEERING. Explore the world of engineering with YCEM. Get involved in our events and career guidance and mentorship opportunities.",
            images: [
              {
                url: "https://res.cloudinary.com/josephine19001/image/upload/v1698596509/YCEM/mmtsy0x1bf5aq1jpjbwc.png",
                width: 1200,
                height: 630,
                alt: "YCEM Logo Image",
              },
            ],
          }}
        />
        <Component {...pageProps} />
      </>
    </Layout>
  );
};

export default App;
