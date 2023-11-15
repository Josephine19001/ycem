import React from "react";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../../shared/containers";
import InpageNav from "../in-page-nav";
import girlTodayEvent from "../../../../public/assets/events/girls-today-event.jpg";
// import EventItem from "../event-list-item";

const Container = styled(FlexContainerRowSpaceBetween)``;

const UpcomingEvents = () => {
  return (
    <InpageNav>
      <Container>We are cooking something for you 🤩</Container>
    </InpageNav>
  );
};

export default UpcomingEvents;

const events = [
  {
    eventHref: "/events/upcoming-events/girls-today-tech-innovators-tomorrow",
    month: "Nov",
    date: "11",
    title: "Girls Today, Tech Innovators Tomorrow",
    timeDay: "Saturday, 3:30PM - 5:00PM GMT",
    location: "Online, Google Meet",
    eventImg: girlTodayEvent,
  },
];
