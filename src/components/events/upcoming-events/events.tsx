import React from "react";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../../shared/containers";
import InpageNav from "../in-page-nav";
import EventItem from "../event-list-item";
import aiMedicineFLyer from "public/assets/events/ai-in-medicine.png";

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

const events: any[] = [
  {
    eventHref: "/events/upcoming-events/ai-in-medicine",
    month: "May",
    date: "11",
    title: "AI IN MEDICAL IMAGING: REVOLUTIONIZING HEALTHCARE",
    timeDay: "Saturday, 03:00PM GMT",
    location: "Online, Zoom",
    eventImg: aiMedicineFLyer,
  },
];
