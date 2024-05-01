import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import EventsComponent from "../../../src/components/events/upcoming-events/ai-in-medicine";

const AiInMedicine: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          AI IN MEDICAL IMAGING: REVOLUTIONIZING HEALTHCARE - JOIN THE
          TRANSFORMATION! - ycem.org
        </title>
      </Head>
      <NextSeo
        openGraph={{
          type: "ycem.org",
          locale: "en_IE",
          url: "https://ycem.org",
          siteName: "YCEM",
          title: "Your Choice in Engineering Matters",
          description:
            "AI IN MEDICAL IMAGING: REVOLUTIONIZING HEALTHCARE - JOIN THE TRANSFORMATION!",
          images: [
            {
              url: "public/assets/events/ai-in-medicine.png",
              width: 1200,
              height: 630,
              alt: "AI IN MEDICAL IMAGING: REVOLUTIONIZING HEALTHCARE - JOIN THE TRANSFORMATION!flyer",
            },
          ],
        }}
      />
      <EventsComponent />
    </>
  );
};

export default AiInMedicine;
