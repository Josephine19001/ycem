import React from "react";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../../shared/containers";
import InpageNav from "../in-page-nav";
import exploringTheWorldOfAI from "../../../../public/assets/events/exploring-the-world-of-ai-banner.png";
import EventItem from "../event-list-item";

const Container = styled(FlexContainerRowSpaceBetween)``;

const UpcomingEvents = () => {
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

export default UpcomingEvents;

const events = [
  {
    eventHref: "/events/upcoming-events/exploring-the-world-of-ai",
    month: "Feb",
    date: "24",
    title: "Exploring the World of Artificial Intelligence",
    timeDay: "Saturday, 11:00AM GMT",
    location: "Online, Zoom",
    eventImg: exploringTheWorldOfAI,
  },
];
