import React from "react";
import EventPage from "../event-page";
import banner from "../../../../public/assets/events/girl-today-innovation-banner.png";
import { FlexContainerColumnGapped } from "../../shared/containers";

const GirlsTodayInnovatorsTomorrow = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:30PM - 5:00PM GMT"}
      date="November 11th, 2023"
      location="Online, Google Meets"
      eventLink="https://forms.gle/h5Sxp6G1NeCTiJsr6"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped>
          <p>
            Embrace the Future with {""}
            <b>'Girls Today, Tech Innovators Tomorrow'! </b>
            Dive into the world of technology as we bring together a dynamic
            group of Software Engineers who've conquered the tech landscape.
            Discover the latest industry statistics, uncover the pressing need
            for gender diversity in tech, and learn from these pioneers.
          </p>
          <p>
            Engage in thought-provoking panel discussions, explore the secrets
            of navigating the tech terrain, and seize the opportunity to pose
            your burning questions. With statistics revealing the gender gap in
            technology and the immense potential of diversity in driving
            innovation, this event is a call to action.
          </p>
          <p>
            Join us to witness the change-makers, gain insights, and ignite your
            own journey towards tech excellence. 'Girls Today, Tech Innovators
            Tomorrow' is more than an event; it's a movement for a brighter,
            more inclusive tech future.
          </p>
        </FlexContainerColumnGapped>
      }
    />
  );
};

export default GirlsTodayInnovatorsTomorrow;
