import React from "react";
import EventPage, { Description } from "../past-event-page";
import banner from "public/assets/events/Bioinformatics.png";
import { ButtonPrimary } from "../../shared/buttons";

const ExploringPathBomed = () => {
  return (
    <EventPage
      timeDay={"Saturday, 3:30AM GMT"}
      date="April 24th, 2024"
      location="Online, Zoom"
      feedBackLink="https://forms.gle/PDBjwDLW47KnkpL97"
      eventBanner={banner}
      description={
        <Description>
          <h2>Event Summary</h2>

          <p>
            Thank you for joining the YCEM&apos;s second installment in our
            Biomedical Engineering talk series, &apos;Exploring Bioinformatics and
            Beyond.&apos; It was an illuminating journey through the intersection of
            biology, computer science, and information technology. Our speakers
            elucidated the crucial role of bioinformatics in decoding biological
            data, from genomics to drug discovery. Participants gained insights
            into the tools and techniques driving advancements in personalized
            medicine and understanding complex diseases. Exploring
            bioinformatics unveiled a world where data becomes the cornerstone
            of biomedical research and healthcare innovation, shaping the future
            of precision medicine.
          </p>
          <p>
            Key takeaways from our event include understanding the significance
            of big data analytics in deciphering the human genome, recognizing
            the potential of machine learning algorithms in predicting disease
            outcomes, and appreciating the ethical considerations surrounding
            the use of personal health data. By delving into bioinformatics and
            its applications, participants not only expanded their knowledge but
            also glimpsed into the vast possibilities of leveraging data-driven
            approaches in biomedical research and clinical practice. We extend
            our gratitude to our speakers and attendees for their engagement and
            enthusiasm in exploring the frontier of bioinformatics and its
            transformative impact on healthcare.
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
                window.open("https://forms.gle/PDBjwDLW47KnkpL97", "_blank")
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

export default ExploringPathBomed;
