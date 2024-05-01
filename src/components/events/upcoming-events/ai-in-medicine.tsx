import React from "react";
import EventPage from "../event-page";
import banner from "public/assets/events/ai-in-medicine-banner.png";
import { FlexContainerColumn } from "../../shared/containers";

const AIInMedicine = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:00PM GMT"}
      date="May 11th, 2024"
      location="Online, Zoom"
      eventLink="https://forms.gle/2eoLuwpXU5e6EfLGA"
      eventBanner={banner}
      description={
        <FlexContainerColumn>
          <p>
            Prepare for an immersive journey into the future of Biomedical
            Engineering, with a focus on Medical Imaging, at our upcoming event!
            Join us as we delve into key topics that will not only introduce you
            to the fundamentals of Medical Imaging but also showcase the
            applications of AI in this transformative field of Biomedical
            Engineering. Whether you're a tech enthusiast, a budding
            professional, or simply curious about the possibilities Biomedical
            Engineering holds, this event is your gateway to understanding the
            present and shaping the future of healthcare innovation.
          </p>
        </FlexContainerColumn>
      }
    />
  );
};

export default AIInMedicine;
