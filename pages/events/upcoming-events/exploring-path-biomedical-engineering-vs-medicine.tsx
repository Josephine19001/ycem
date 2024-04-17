import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import EventsComponent from "../../../src/components/events/upcoming-events/exploring-path-biomed";

const ExploringBioInformatics: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Exploring paths: Medicine vs. Biomedical Engineering - ycem.org
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
            "Introducing 'Exploring paths: Medicine vs. Biomedical Engineering' – our new biomedical series featuring insightful journeys in the Biomed world. Dive into engaging events and seize career guidance and mentorship opportunities. Join us!",
          images: [
            {
              url: "public/assets/events/biomed-medicine.flyer.png",
              width: 1200,
              height: 630,
              alt: "Exploring paths: Medicine vs. Biomedical Engineeringflyer",
            },
          ],
        }}
      />
      <EventsComponent />
    </>
  );
};

export default ExploringBioInformatics;
