import React from "react";
import EventPage from "../event-page";
import banner from "../../../../public/assets/events/exploring-the-world-of-ai-landscape.png";
import { FlexContainerColumnGapped } from "../../shared/containers";

const ExploringTheWorldOfAI = () => {
  return (
    <EventPage
      timeDay={"Saturday, 11:00AM GMT"}
      date="February 24th, 2024"
      location="Online, Zoom"
      eventLink="https://forms.gle/V3Xj57XQEfgJKJiV9"
      eventBanner={banner}
      description={
        <FlexContainerColumnGapped $alignitems="flex-start">
          <i>
            Peek into the future of AI: where algorithms meet imagination,
            unlocking tomorrow&apos;s possibilities!{""}
          </i>
          <p>
            YCEM is thrilled to present:{" "}
            <b>&apos;Exploring the World of Artificial Intelligence&apos;!</b>{" "}
            Brace yourself for an immersive journey into the world of AI at our
            upcoming webinar event. Join us as we explore key topics, unraveling
            the fundamentals and showcasing diverse applications in today&apos;s
            dynamic world. Whether you&apos;re a tech enthusiast, a budding
            professional, or simply curious about AI&apos;s possibilities, this
            event is your gateway to understanding the present and shaping the
            future.
          </p>

          <div
            style={{
              marginTop: "16px",
            }}
          >
            <h5>Key Topics:</h5>
            <ul className="event-ul" style={{ marginBottom: "12px" }}>
              <li>Introduction to Artificial Intelligence</li>
              <li>Applications of AI in Today&apos;s World</li>
              <li>AI Quizzes and Games</li>
              <li>Career Paths in AI</li>
            </ul>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <h5>Who Should Attend?</h5>
            <ul className="event-ul">
              <li>Senior High School to University Students</li>
              <li>All levels of AI familiarity welcome!</li>
            </ul>
          </div>

          <p>
            Don&apos;t miss out on this interesting opportunity to satisfy your
            curiosity about AI🤖 . Save your spot and be part of this exciting
            exploration into the cutting-edge realms of technology!
          </p>
        </FlexContainerColumnGapped>
      }
    />
  );
};

export default ExploringTheWorldOfAI;
