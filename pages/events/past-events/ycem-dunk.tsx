import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import EventsComponent from '../../../src/components/events/past-events/ycem-dunk';

const YCEMDUNK: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igniting Young Minds in Engineering with DUNK - ycem.org</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'ycem.org',
          locale: 'en_IE',
          url: 'https://ycem.org',
          siteName: 'YCEM',
          title: 'Your Choice in Engineering Matters',
          description: 'Igniting Young Minds in Engineering with DUNK',
          images: [
            {
              url: 'public/assets/events/ycem-dunk.png',
              width: 1200,
              height: 630,
              alt: 'Igniting Young Minds in Engineering with DUNKflyer'
            }
          ]
        }}
      />
      <EventsComponent />
    </>
  );
};

export default YCEMDUNK;
