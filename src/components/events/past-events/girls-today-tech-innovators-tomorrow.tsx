import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "public/assets/events/girl-today-innovation-banner.png";
import { ButtonPrimary } from "../../shared/buttons";

const GirlsTodayInnovatorsTomorrow = () => {
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
            Thank you to all who joined us for an insightful webinar as we
            delved into the world of technology with our event{" "}
            <b>&apos;Girls Today, Tech Innovators Tomorrow&apos;! </b>{" "}
            Throughout the session, we brought together a dynamic group of
            Software Engineers who have conquered the tech landscape, providing
            attendees with the latest industry statistics and uncovering the
            pressing need for gender diversity in tech. Our hosts, shared
            inspiring examples of how technology is transforming our world and
            empowering women to become leaders in the field.
          </p>
          <h3>Key Highlights</h3>
          <ul className="event-ul">
            <li>
              <b>Career Opportunities in Tech:</b> We explored the diverse range
              of career paths available in the tech industry, from Software
              Engineer to UX Designer. Attendees learned about the exciting
              opportunities awaiting them in this rapidly evolving field.
            </li>
            <li>
              <b>Promoting Diversity:</b> Our discussions emphasized the
              importance of diversity and inclusion in tech. By showcasing the
              achievements of women in technology, we aimed to inspire the next
              generation of tech innovators and foster a more inclusive
              industry.
            </li>
            <li>
              <b>Empowering Future Leaders:</b> The event concluded with a call
              to action, encouraging attendees to pursue their passions and
              strive for excellence in the tech industry. By empowering girls
              today, we are nurturing the tech innovators of tomorrow.
            </li>
          </ul>

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
                window.open("https://forms.gle/Vwp2zosiN473S9J5A", "_blank")
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

export default GirlsTodayInnovatorsTomorrow;

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
