import React from 'react';
import EventPage, { Description } from '../past-event-page';
import banner from 'public/assets/events/ai-in-medicine-banner.png';

const AIInMedicine = () => {
  return (
    <EventPage
      timeDay={'Saturday, 3:00PM GMT'}
      date="May 11th, 2024"
      location="Online, Zoom"
      feedBackLink="https://forms.gle/2eoLuwpXU5e6EfLGA"
      eventBanner={banner}
      description={
        <Description>
          <h2>Summary</h2>
          <p>
            Prepare for an immersive journey into the future of Biomedical
            Engineering, with a focus on Medical Imaging, at our upcoming event!
            Join us as we delve into key topics that will not only introduce you
            to the fundamentals of Medical Imaging but also showcase the
            applications of AI in this transformative field of Biomedical
            Engineering. Whether you&apos;re a tech enthusiast, a budding
            professional, or simply curious about the possibilities Biomedical
            Engineering holds, this event is your gateway to understanding the
            present and shaping the future of healthcare innovation.
          </p>
        </Description>
      }
    />
  );
};

export default AIInMedicine;
