import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "../../../../public/assets/events/exploring-the-world-of-ai-landscape-flyer.png";
import { ButtonPrimary } from "../../shared/buttons";
import IframeVideos from "../../shared/iframe";

const ExploringTheWorldOfAI = () => {
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
            delved into the world of Artificial Intelligence (AI). In the
            session, we explored the multifaceted nature of AI, its practical
            applications in everyday life, promising career opportunities, as
            well as some crucial concerns and the optimistic outlook it holds
            for the future.
          </p>
          <h3>Key Highlights</h3>
          <ul className="event-ul">
            <li>
              <b>Understanding AI:</b> Our host, Oforiwaa, began by simplifying
              AI, defining it as technology that enables machines to perform
              tasks that typically require human intelligence. Oforiwaa also
              provided examples of how AI is being applied in our daily lives,
              such as virtual assistants like Siri, and in robotics with
              creations like Pepper and Sophia. Additionally, she highlighted
              how AI is utilized in mundane tasks such as email management,
              showcasing its pervasive presence in our modern world.
            </li>
            <li>
              <b>AI Career Landscape:</b> We delved into the diverse array of
              career opportunities within the AI domain, spanning roles from
              Computer Vision Engineer to AI Engineer, Data Mining Analyst,
              Machine Learning Engineer, Business Intelligence Developer,
              Software Engineer, UX Designer, and many more.
            </li>
            <li>
              <b>Concerns and Considerations:</b> Addressing critical issues
              surrounding AI, including threats to privacy, human dignity, and
              safety, prompted meaningful discussions on responsible AI
              development and deployment.
            </li>
            <li>
              <b>The Future of AI:</b> Despite challenges, the future of AI
              appears promising, with its transformative potential already
              evident in industries such as healthcare and banking, hinting at
              significant advancements across various sectors.
            </li>
          </ul>
          <h3>Accessing Resources</h3>
          <p>
            For those unable to attend the live session or wishing to revisit
            the discussions, the event recording can be accessed below.
            Additionally, presentation slides are available{" "}
            <a
              href="https://drive.google.com/file/d/1C5WzJqdWMg2vI0rCwTg9bgWSOns1XyNY/view?usp=sharing"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          <IframeVideos
            title="YCEM Webinar: Exploring the World of Artificial Intelligence"
            videoSrc="https://www.youtube.com/embed/KoWJTIfPPhU?si=TQUaNoPCLqKCz-5O"
          />

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
                window.open("https://forms.gle/cMogfpmBrXYL3Zxg6", "_blank")
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

export default ExploringTheWorldOfAI;
