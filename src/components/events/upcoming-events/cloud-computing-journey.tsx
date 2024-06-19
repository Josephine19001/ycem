import React from 'react';
import EventPage from '../event-page';
import banner from 'public/assets/events/cloud-banner.png';
import { FlexContainerColumn } from '../../shared/containers';

const CloudIntro = () => {
  return (
    <EventPage
      timeDay={'Saturday, 3:00PM GMT'}
      date="July 6th, 2024"
      location="Online, Google Meets"
      eventLink="https://forms.gle/PZSazeCwDydh43q3A"
      eventBanner={banner}
      description={
        <FlexContainerColumn style={{ alignItems: 'flex-start' }}>
          <h2>Description</h2>
          <p>
            Get ready for an immersive journey into the Cloud Computing journey
            at our next event! Join us as we delve into key topics that will not
            only introduce you to the fundamentals of Cloud Computing but also
            showcase its wide-ranging applications in today&apos;s dynamic
            world. Whether you&apos;re a tech enthusiast, a budding
            professional, or simply curious about the possibilities Cloud
            Computing holds, this event is your gateway to understanding the
            present and shaping the future.
          </p>
        </FlexContainerColumn>
      }
    />
  );
};

export default CloudIntro;
