import React from "react";
import EventPage from "../event-page";
import banner from "public/assets/events/biomed-medicine-banner.png";
import { FlexContainerColumnGapped } from "../../shared/containers";

const ExploringPathBiomedicalVsMedicine = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:30PM GMT"}
      date="April 37rd, 2024"
      location="Online, Zoom"
      eventLink="https://forms.gle/krxVdrm9sfAfJ7Gm8"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped>
          <p>
            Prepare for an immersive journey into the future of Biomedical
            Engineering! We are exploring medicine as a path after Biomedical
            Engineering, at our upcoming event! From understanding the
            foundational principles of Biomedical Engineering to applying its
            transformative applications in healthcare, this event is designed to
            ignite your curiosity and inspire your career journey. Whether
            you're a tech enthusiast, a budding professional, or simply curious
            about the possibilities Biomedical Engineering holds, this event is
            your gateway to understanding the present and shaping the future of
            healthcare innovation.
          </p>
        </FlexContainerColumnGapped>
      }
    />
  );
};

export default ExploringPathBiomedicalVsMedicine;
