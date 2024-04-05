import { useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { events } from "../events/past-events/events";
import { SectionDescription, SectionTitle } from "../shared/typography";
import { ButtonLink } from "../shared/nav-link";
import { ButtonPrimary, ButtonSecondary } from "../shared/buttons";
import Link from "next/link";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const EventHeader = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const EventImg = styled.div`
  position: relative;
  padding: 5px;

  &::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    left: 0;
    background: var(--color-primary-lighter);
    border-radius: 10px;
    opacity: 1;
    z-index: -1;
    transition: 0.5s;
  }

  &::after {
    content: "";
    width: 150px;
    height: 150px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: var(--color-primary-lighter);
    border-radius: 10px;
    opacity: 1;
    z-index: -1;
    transition: 0.5s;
  }
`;

const EventContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6); /* Dark semi-transparent overlay */
  color: white;
  opacity: 0;
`;

const EventItem = styled.div`
  &:hover ${EventContent} {
    opacity: 1;
    transition: 0.5s;
  }

  &:hover ${EventImg}::before, &:hover ${EventImg}::after {
    opacity: 0;
  }
`;

const Event = () => {
  return (
    <ContainerFluid className="container-fluid project py-5 mb-5">
      <Container>
        <EventHeader
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <SectionTitle>Events</SectionTitle>
          <SectionDescription style={{ margin: "16px 0" }}>
            Checkout Some Of Our Past And Upcoming Events
          </SectionDescription>
          <Link href="/events/upcoming-events">
            <ButtonPrimary>Learn more</ButtonPrimary>
          </Link>
        </EventHeader>
        <div className="row g-5">
          {events.map((event, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-4 wow fadeIn`}
              data-wow-delay={`.${3 + index * 2}s`}
            >
              <EventItem className="project-item">
                <EventImg className="project-img">
                  <Image
                    src={event.eventImg}
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <EventContent className="project-content">
                    <Link href={event.eventHref}>
                      <ButtonPrimary>Read More</ButtonPrimary>
                    </Link>
                  </EventContent>
                </EventImg>
              </EventItem>
            </div>
          ))}
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Event;
