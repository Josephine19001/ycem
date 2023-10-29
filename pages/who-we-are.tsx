import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import AboutUsComponent from "../src/components/who-we-are";

const WhoWeAre: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Who We Are"
        description="We are a Software Solutions provider, empowering your digital solutions"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://techfoundry.fi/about",
          title: "Tech foundry",
          description:
            "We are a Software Solutions provider, empowering your digital solutions",
          images: [{ url: "https://www.example.ie/og-image-03.jpg" }],
          siteName: "TechFoundry",
        }}
        twitter={{
          handle: "@techfoundry",
          site: "@https://techfoundry.fi/about",
          cardType: "summary_large_image",
        }}
      />
      <AboutUsComponent />
    </>
  );
};

export default WhoWeAre;
