import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "public/assets/events/accragirls-banner.png";

const AccraGirlsEvent = () => {
  return (
    <EventPage
      timeDay={"Friday, 1:00PM GMT"}
      date="March 25th, 2022"
      location="Accra Girls' Senior High School"
      feedBackLink="https://forms.gle/cMogfpmBrXYL3Zxg6"
      eventBanner={banner}
      description={
        <Description>
          <h2>Event Summary</h2>
          <p>
            Thank you to all who joined us for an impactful event as we delved
            into the world of technology at the{" "}
            <b>Accra Girls&apos; Senior High Outreach</b>. Reflecting on the
            memorable event held at Accra Girls&apos; Senior High School, it was
            an enriching experience where we engaged with the young ladies,
            introducing them to unconventional engineering fields such as cloud
            engineering and artificial intelligence. Accompanied by esteemed
            lecturers from the University of Ghana, we delved into the
            requirements for engineering courses and how to prepare for
            admission. The highlight was hearing from final-year engineering
            students who shared invaluable insights into navigating both
            university life and male-dominated fields. The event resonated with
            three key takeaways:
          </p>
          <h3>Key Highlights</h3>
          <ul className="event-ul">
            <li>
              <b>Unleash Your potential:</b> We encouraged the girls to break
              barriers and not confine their aspirations within conventional
              boundaries. Don&apos;t limit your potential based on societal
              norms or perceived limitations.
            </li>
            <li>
              <b>Blend Academia with Real-World Experiences:</b> While academic
              excellence is crucial, it is equally vital to supplement learning
              with practical experiences. Exploring real-life scenarios in
              one&apos;s field of interest equips individuals with invaluable
              skills and prepares them for the challenges beyond the classroom.
            </li>
            <li>
              <b>No One is an Island:</b> Recognize the significance of building
              connections and seeking support for the right people. Whether
              it&apos;s peers, mentors, or industry professionals, no one
              succeeds in isolation. Embracing collaboration fosters growth and
              resilence.
            </li>
          </ul>
        </Description>
      }
    />
  );
};

export default AccraGirlsEvent;

{
  /* <EventPage
      timeDay={"Saturday, 3:30PM - 5:00PM GMT"}
      date="November 11th, 2023"
      location="Online, Google Meets"
      eventLink="https://forms.gle/h5Sxp6G1NeCTiJsr6"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped>
          <p>
            Embrace the Future with {""}
            <b>&apos;Girls Today, Tech Innovators Tomorrow&apos;! </b>
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
    /> */
}
