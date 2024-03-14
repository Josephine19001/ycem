import React from "react";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../../shared/containers";
import InpageNav from "../in-page-nav";
import EventItem from "../event-list-item";
import biomedicalSeriesFlyer from '../../../../public/assets/events/biomedical.series.flyer.png'

export const Container = styled(FlexContainerRowSpaceBetween)`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
`;

const UpcomingEvents = () => {
  return (
    <InpageNav>
      <Container>
        {events.length !== 0 ? (
          events.map(
            ({
              eventHref,
              eventImg,
              month,
              date,
              title,
              timeDay,
              location,
            }) => (
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
          )
        ) : (
          <p> We are currently planning our next event. Be on the lookout😇</p>
        )}
      </Container>
    </InpageNav>
  );
};

export default UpcomingEvents;

interface IEvent {
  eventHref: string;
  eventImg: string;
  month: string;
  date: string;
  title: string;
  timeDay: string;
  location: string;
}

const events: any[] = [
  {
    eventHref: "/events/upcoming-events/clinical-engineering-series-1",
    month: "Mar",
    date: "23",
    title: "A Step into clinical engineering ",
    timeDay: "Saturday, 03:30PM GMT",
    location: "Online, Zoom",
    eventImg: biomedicalSeriesFlyer,
  },
];
