import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInvolveComponent from "../src/components/get-involved";

const GetInvolve: NextPage = () => {
  return (
    <>
      <Head>
        <title>Get Involved - ycem.org</title>
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
      <GetInvolveComponent />
    </>
  );
};

export default GetInvolve;
