import React from "react";
import EventPage from "../event-page";
import banner from "../../../../public/assets/events/Bioinformatics.png";
import { FlexContainerColumnGapped } from "../../shared/containers";

const ClinicalEngineeringSeries = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:30PM GMT"}
      date="April 13rd, 2024"
      location="Online, Zoom"
      eventLink="https://docs.google.com/forms/d/e/1FAIpQLScG9H7eb6sCQdrH7R6Ri-xo4iAOgnhEvWxIovOUatw1jWAz8w/viewform"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped>
          <p>
            Join us on an exciting journey of discovery with NATALIE KOKROKO, a
            Ph.D. Computer Science student at Rice University in Texas, USA.
            With a Bachelor's Degree in Biomedical Engineering, where she
            discovered her enthusiasm for Bioinformatics, Natalie's research
            bridges Biomedical Science and Computer Science. You don't want to
            miss out on insightful discussions and answers to your burning
            questions about Bioinformatics. 🥳
          </p>
          <p>
            Step into the exciting world of Clinical Engineering with our new
            series! Let's embark on a journey,{" "}
            <b>'Exploring Bioinformatics and Beyond'!</b>, where we delve deep
            into the heart of biomedical innovation. Our esteemed guest, Natalie
            Kokroko, will take you on a journey through her professional
            experiences, offering invaluable insights into the intricacies of
            Clinical Engineering.
          </p>
          <p>
            Join us as we delve into key topics that will not only introduce you
            to the fundamentals of clinical engineering but also showcase its
            applications in today's dynamic healthcare landscape. Whether you're
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
