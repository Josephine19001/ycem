import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "public/assets/events/biomedical-series-1.png";
import { ButtonPrimary } from "../../shared/buttons";

const ClinicalEngineeringSeries = () => {
  return (
    <EventPage
      timeDay={"Saturday, 11:00AM GMT"}
      date="February 24th, 2024"
      location="Online, Zoom"
      feedBackLink="https://forms.gle/cMogfpmBrXYL3Zxg6"
      eventBanner={banner}
      description={
        <Description>
          <h2>Event Summary</h2>
          <p>
            Step into the exciting world of Clinical Engineering with our latest
            series, &apos;A Step Into Clinical Engineering,&apos; where we
            delved deep into the heart of biomedical innovation. Our esteemed
            guest took us on a journey through their professional experiences,
            offering invaluable insights into the intricacies of Clinical
            Engineering.
          </p>
          <p>
            We delved into key topics that not only introduced participants to
            the fundamentals of clinical engineering but also showcased its
            applications in today&apos;s dynamic healthcare landscape. Whether
            you were a tech enthusiast, a budding professional, or simply
            curious about the possibilities Biomedical Engineering holds, this
            event served as your gateway to understanding the present and
            shaping the future of healthcare innovation.
          </p>

          <h3>We Value Your Feedback</h3>
          <p>
            Your insights are paramount to us. Please share your thoughts,
            suggestions, or any feedback you may have regarding the webinar
            experience by clicking the button below to complete our feedback
            form. We greatly appreciate your input!
          </p>
          <span>
            <ButtonPrimary
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1ooHXBKOu0_7uI-3CooYBYciAnXf6PyFDXXPlNW053ao/edit",
                  "_blank"
                )
              }
            >
              Feedback form
            </ButtonPrimary>
          </span>
        </Description>
      }
    />
  );
};

export default ClinicalEngineeringSeries;
