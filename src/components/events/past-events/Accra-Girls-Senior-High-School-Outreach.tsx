import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "../../../../public/assets/events/student.jpg";
import { ButtonPrimary } from "../../shared/buttons";

{
   <EventPage
      timeDay={"Friday, 1PM GMT"}
      date="March 25th, 2022"
      location="Accra Girls&apos; Senior High School"
      eventLink="https://forms.gle/h5Sxp6G1NeCTiJsr6"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped>
          <p>
            Embrace the Future with {""}
            <b>&apos;Accra Girls Today, Tech Innovators Tomorrow&apos;! </b>
            Dive into the world of technology as we bring together a dynamic
            group of Software Engineers who&apos;ve conquered the tech
            landscape. Discover the latest industry statistics, uncover the
            pressing need for gender diversity in tech, and learn from these
            pioneers.
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
            own journey towards tech excellence. &apos;Girls Today, Tech
            Innovators Tomorrow&apos; is more than an event; it&apos;s a
            movement for a brighter, more inclusive tech future.
          </p>
        </FlexContainerColumnGapped>
      }
    /> 
}
