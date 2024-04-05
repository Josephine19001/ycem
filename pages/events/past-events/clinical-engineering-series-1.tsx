import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import EventsComponent from "../../../src/components/events/past-events/clinical-engineering-series-1";

const ClinicalEngineeringSeries: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Step Into Clinical Engineering - ycem.org</title>
      </Head>
      <NextSeo
        openGraph={{
          type: "ycem.org",
          locale: "en_IE",
          url: "https://ycem.org",
          siteName: "YCEM",
          title: "Your Choice in Engineering Matters",
          description:
            "Introducing 'A Step Into Clinical Engineering' – our new biomedical series featuring insightful journeys in the Biomed world. Dive into engaging events and seize career guidance and mentorship opportunities. Join us!",
          images: [
            {
              url: "public/assets/events/biomedical.series.flyer.png",
              width: 1200,
              height: 630,
              alt: "Clinical Engineering event flyer",
            },
          ],
        }}
      />
      <EventsComponent />
    </>
  );
};

export default ClinicalEngineeringSeries;
