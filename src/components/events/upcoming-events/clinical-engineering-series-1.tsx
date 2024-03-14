import React from "react";
import EventPage from "../event-page";
import banner from "../../../../public/assets/events/biomedical-series-1.png";
import { FlexContainerColumnGapped } from "../../shared/containers";

const ClinicalEngineeringSeries = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:30PM GMT"}
      date="March 23rd, 2024"
      location="Online, Zoom"
      eventLink="https://forms.gle/yb2HCoc4pZWrNBV98"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped>
          <p>
            Step into the exciting world of Clinical Engineering with our new
            series! Let&apos;s embark on a journey,{" "}
            <b>&apos;A Step Into Clinical Engineering&apos;! </b>, where we
            delve deep into the heart of biomedical innovation. Our esteemed
            guest will take you on a journey through their professional
            experiences, offering invaluable insights into the intricacies of
            Clinical Engineering.
          </p>
          <p>
            Join us as we delve into key topics that will not only introduce you
            to the fundamentals of clinical engineering but also showcase its
            applications in today&apos;s dynamic healthcare landscape. Whether you&apos;re
            a tech enthusiast, a budding professional, or simply curious about
            the possibilities Biomedical Engineering holds, this event is your
            gateway to understanding the present and shaping the future of
            healthcare innovation.
          </p>
        </FlexContainerColumnGapped>
      }
    />
  );
};

export default ClinicalEngineeringSeries;
