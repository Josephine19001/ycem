import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import UniversityRepresentativeComponent from "../../src/components/who-we-are/our-university-reps";
import Head from "next/head";

const UniversityRepresentatives: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our University Reps- ycem.org</title>
      </Head>
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
      <UniversityRepresentativeComponent />
    </>
  );
};

export default UniversityRepresentatives;
