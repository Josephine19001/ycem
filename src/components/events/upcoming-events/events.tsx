import React from "react";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../../shared/containers";
import InpageNav from "../in-page-nav";
import unveilingTheFutureOfAI from "../../../../public/assets/events/oforiwaa-event.jpg";
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
    eventHref: "/events/upcoming-events/unveiling-the-future-of-ai",
    month: "Jan",
    date: "06",
    title: "Unveiling the Future of Artificial Intelligence",
    timeDay: "Saturday, 3:30PM - 5:00PM GMT",
    location: "Online, Zoom",
    eventImg: unveilingTheFutureOfAI,
  },
];
