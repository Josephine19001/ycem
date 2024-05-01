import React from "react";
import InpageNav from "../in-page-nav";
import girlTodayEvent from "public/assets/events/girls-today-event.jpg";
import exploringTheWorldOfAI from "public/assets/events/exploring-the-world-of-ai-banner.png";
import biomedicalSeriesFlyer from "public/assets/events/biomedical.series.flyer.png";
import exploringBioInformaticPic from "public/assets/events/exploring-bioinformatic.png";
import biomedMedicineFLyer from "public/assets/events/biomed-medicine-flyer.png";

import { Container } from "../upcoming-events/events";
import EventItem from "../event-list-item";

const PastEvents = () => {
  return (
    <InpageNav>
      <Container>
        {events.map(
          ({ eventHref, eventImg, month, date, title, timeDay, location }) => (
            <EventItem
              key={title}
              eventHref={eventHref}
              eventImg={eventImg}
              month={month}
              date={date}
              timeDay={timeDay}
              location={location}
              title={title}
            />
          )
        )}
      </Container>
    </InpageNav>
  );
};

export default PastEvents;

export const events = [
  {
    eventHref:
      "/events/past-events/exploring-path-biomedical-engineering-vs-medicine",
    month: "Apr",
    date: "27",
    title: "Exploring paths: Medicine vs. Biomedical Engineering",
    timeDay: "Saturday, 03:30PM GMT",
    location: "Online, Zoom",
    eventImg: biomedMedicineFLyer,
  },
  {
    eventHref: "/events/past-events/exploring-bioinformatics-series-2",
    month: "Apr",
    date: "13",
    title: "Exploring Bioinformatics and Beyond",
    timeDay: "Saturday, 03:30PM GMT",
    location: "Online, Zoom",
    eventImg: exploringBioInformaticPic,
  },
  {
    eventHref: "/events/past-events/clinical-engineering-series-1",
    month: "Mar",
    date: "23",
    title: "A Step into clinical engineering ",
    timeDay: "Saturday, 03:30PM GMT",
    location: "Online, Zoom",
    eventImg: biomedicalSeriesFlyer,
  },
  {
    eventHref: "/events/past-events/exploring-the-world-of-ai",
    month: "Feb",
    date: "24",
    title: "Exploring the World of Artificial Intelligence",
    timeDay: "Saturday, 11:00AM GMT",
    location: "Online, Zoom",
    eventImg: exploringTheWorldOfAI,
  },
  {
    eventHref: "/events/past-events/girls-today-tech-innovators-tomorrow",
    month: "Nov",
    date: "11",
    title: "Girls Today, Tech Innovators Tomorrow",
    timeDay: "Saturday, 3:30PM - 5:00PM GMT",
    location: "Online, Google Meet",
    eventImg: girlTodayEvent,
  },
];
