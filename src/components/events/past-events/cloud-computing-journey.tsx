import React from 'react';
import EventPage from '../past-event-page';
import banner from 'public/assets/events/cloud-banner.png';
import { FlexContainerColumn } from '../../shared/containers';

const CloudIntro = () => {
  return (
    <EventPage
      timeDay={'Saturday, 3:00PM GMT'}
      date="July 6th, 2024"
      location="Online, Google Meets"
      eventBanner={banner}
      description={
        <FlexContainerColumn style={{ alignItems: 'flex-start' }}>
          <h2>Summary</h2>
          <p>
            We had an immersive journey into the Cloud Computing journey at our
            last event! We delve into key topics that will not only introduce
            you to the fundamentals of Cloud Computing but also showcase its
            wide-ranging applications in today&apos;s dynamic world. Whether you
            were a tech enthusiast, a budding professional, or simply curious
            about the possibilities Cloud Computing holds, the event was your
            gateway to understanding the present and shaping the future.
          </p>
        </FlexContainerColumn>
      }
    />
  );
};

export default CloudIntro;
