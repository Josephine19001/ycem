import React from "react";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../../shared/containers";
import InpageNav from "../in-page-nav";
import EventItem from "../event-list-item";
import biomedMedicineFLyer from "../../../../public/assets/events/biomed-medicine-flyer.png";

export const Container = styled(FlexContainerRowSpaceBetween)`
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UpcomingEvents = () => {
  return (
    <InpageNav>
      <Wrapper>
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
            <p>
              {" "}
              We are currently planning our next event. Be on the lookout😇
            </p>
          )}
        </Container>
      </Wrapper>
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
    eventHref:
      "/events/upcoming-events/exploring-path-biomedical-engineering-vs-medicine",
    month: "Apr",
    date: "27",
    title: "Exploring paths: Medicine vs. Biomedical Engineering",
    timeDay: "Saturday, 03:30PM GMT",
    location: "Online, Zoom",
    eventImg: biomedMedicineFLyer,
  },
];
