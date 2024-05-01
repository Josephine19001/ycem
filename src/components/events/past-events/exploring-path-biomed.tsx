import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "public/assets/events/biomed-medicine-banner.png";
import { ButtonPrimary } from "../../shared/buttons";

const ExploringPathBiomedicalVsMedicine = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:30PM GMT"}
      date="April 27th, 2024"
      location="Online, Zoom"
      feedBackLink=""
      eventBanner={banner}
      description={
        <Description>
          <h2>Event Summary</h2>

          <p>
            Prepare for an immersive journey into the future of Biomedical
            Engineering! We are exploring medicine as a path after Biomedical
            Engineering, at our upcoming event! From understanding the
            foundational principles of Biomedical Engineering to applying its
            transformative applications in healthcare, this event is designed to
            ignite your curiosity and inspire your career journey. Whether
            you&apos;re a tech enthusiast, a budding professional, or simply
            curious about the possibilities Biomedical Engineering holds, this
            event is your gateway to understanding the present and shaping the
            future of healthcare innovation.
          </p>

          <span>
            <ButtonPrimary onClick={() => window.open("", "_blank")}>
              Feedback form
            </ButtonPrimary>
          </span>
        </Description>
      }
    />
  );
};

export default ExploringPathBiomedicalVsMedicine;
