import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import AboutUsComponent from "../src/components/who-we-are";

const WhoWeAre: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Who We Are"
        description="Empowering HER Future in Engineering"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://ycem.org/who-we-are",
          title: "YCEM, Your Choice in Engineering",
          description:
            "Empowering young women to shape a brighter future in STEM.",
          images: [{ url: "https://www.example.ie/og-image-03.jpg" }],
          siteName: "YCEM",
        }}
        twitter={{
          handle: "@ycem_project",
          site: "@https://ycem.org/who-we-are",
          cardType: "summary_large_image",
        }}
      />
      <AboutUsComponent />
    </>
  );
};

export default WhoWeAre;
