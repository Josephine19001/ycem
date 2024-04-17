import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import EventsComponent from "../../../src/components/events/past-events/exploring-path-bioinformatics";

const ExploringBioInformatics: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exploring Bioinformatics and Beyond - ycem.org</title>
      </Head>
      <NextSeo
        openGraph={{
          type: "ycem.org",
          locale: "en_IE",
          url: "https://ycem.org",
          siteName: "YCEM",
          title: "Your Choice in Engineering Matters",
          description:
            "Introducing 'Exploring Bioinformatics and Beyond' – our new biomedical series featuring insightful journeys in the Biomed world. Dive into engaging events and seize career guidance and mentorship opportunities. Join us!",
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

export default ExploringBioInformatics;
