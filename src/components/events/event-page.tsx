import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarAlt,
  faLink,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FlexContainerRowSpaceBetween } from "../shared/containers";
import { ButtonPrimary } from "../shared/buttons";

const PageContainer = styled.div``;

const HeroBanner = styled.div``;

const Description = styled.div`
  width: 70%;
  margin-right: 32px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Details = styled(FlexContainerRowSpaceBetween)`
  margin-top: 50px;
`;

const EventContainer = styled.div`
  background-color: white;
  padding: 36px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  // align-self: flex-start;
  p {
    color: var(--color-gray);
    align-self: flex-start;
  }

  h6 {
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--color-gray-light);
  padding: 0 2rem;
  width: 100%;
`;

const ShareIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ShareIcon = styled.a`
  display: inline-block;
  background-color: inherit;
  border-radius: 50%;
  border: 1px solid var(--color-primary);
  text-align: center;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-primary);

    svg {
      color: var(--color-light) !important;
    }
  }
`;

interface Props {
  eventLink: string;
  date: string;
  location: string;
  description: any;
  timeDay: string;
  eventBanner: any;
}

const EventPage = ({
  eventLink,
  location,
  description,
  timeDay,
  eventBanner,
  date,
}: Props) => {
  const [eventLinkCopied, setEventLinkCopied] = useState(false);

  const copyEventLinkToClipboard = () => {
    navigator.clipboard
      .writeText(eventLink)
      .then(() => {
        setEventLinkCopied(true);
      })
      .catch((error) => {
        console.error("Error copying event link to clipboard: ", error);
      });
  };

  return (
    <PageContainer>
      <HeroBanner>
        <Image src={eventBanner} alt="Event banner" />
      </HeroBanner>
      <Details>
        <Description>{description}</Description>
        <EventContainer>
          <p>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{
                cursor: "pointer",
                marginRight: "5px",
                color: "color: var(--color-gray) !important",
              }}
            />{" "}
            {date}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCalendarDay}
              style={{
                cursor: "pointer",
                marginRight: "5px",
                color: "color: var(--color-gray) !important",
              }}
            />{" "}
            {timeDay}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{
                cursor: "pointer",
                marginRight: "5px",
                color: "color: var(--color-gray) !important",
              }}
            />{" "}
            {location}
          </p>
          <a style={{ marginTop: "12px" }} href={eventLink} target="_blank">
            <ButtonPrimary>Register now</ButtonPrimary>
          </a>
          <h6>SHARE THIS EVENT & FOLLOW US</h6>
          <Divider />
          <ShareIcons>
            <ShareIcon
              href="https://instagram.com/ycem_org?igshid=Y2JoMjh6d3Y1Y3Jz"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  cursor: "pointer",
                  color: "var(--color-primary)",
                }}
              />
            </ShareIcon>
            <ShareIcon
              href="https://www.linkedin.com/in/ycem?originalSubdomain=gh"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  cursor: "pointer",
                  color: "var(--color-primary)",
                }}
              />
            </ShareIcon>
            <ShareIcon onClick={copyEventLinkToClipboard}>
              <FontAwesomeIcon
                icon={faLink}
                style={{
                  cursor: "pointer",
                  color: "var(--color-primary)",
                }}
              />
            </ShareIcon>
          </ShareIcons>
          <span style={{ color: "var(--color-success)" }}>
            {eventLinkCopied ? "Event Link Copied!" : ""}
          </span>
        </EventContainer>
      </Details>
    </PageContainer>
  );
};

export default EventPage;
