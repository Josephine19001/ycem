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
            "Empowering young women to shape a brighter future in Engineering.",
          images: [
            {
              url: "https://res.cloudinary.com/josephine19001/image/upload/v1698596509/YCEM/mmtsy0x1bf5aq1jpjbwc.png",
            },
          ],
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
