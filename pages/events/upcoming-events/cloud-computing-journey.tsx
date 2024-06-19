import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import EventsComponent from '../../../src/components/events/upcoming-events/cloud-computing-journey';

const CloudComputingJourney: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          THE CLOUD COMPUTING JOURNEY: INSPIRING BEGINNERS TO SOAR - ycem.org
        </title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'ycem.org',
          locale: 'en_IE',
          url: 'https://ycem.org',
          siteName: 'YCEM',
          title: 'Your Choice in Engineering Matters',
          description:
            'THE CLOUD COMPUTING JOURNEY: INSPIRING BEGINNERS TO SOAR',
          images: [
            {
              url: 'public/assets/events/cloud-webinar.png',
              width: 1200,
              height: 630,
              alt: 'THE CLOUD COMPUTING JOURNEY: INSPIRING BEGINNERS TO SOARflyer'
            }
          ]
        }}
      />
      <EventsComponent />
    </>
  );
};

export default CloudComputingJourney;
