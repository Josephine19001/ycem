import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import MakeaDifferenceComponent from '../../../src/components/empower-her/make-a-difference';

const MakeaDifference: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Make a Difference Today - Support YCEM&apos;s Engineering Outreach
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
            'In many communities, especially among young girls, there is a lack of awareness and encouragement to pursue careers in engineering. This is why we are launching our Inspire Future Engineers campaign, aimed at visiting schools, dispelling stereotypes, promoting technology, and fostering a love for engineering in young minds.',
          images: [
            {
              url: 'https://res.cloudinary.com/josephine19001/image/upload/v1698596509/YCEM/mmtsy0x1bf5aq1jpjbwc.png',
              width: 1200,
              height: 630,
              alt: 'YCEM Logo Image'
            }
          ]
        }}
      />
      <MakeaDifferenceComponent />
    </>
  );
};

export default MakeaDifference;
