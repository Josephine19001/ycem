import React from "react";
import Image, { type StaticImageData } from "next/image";
import styled from "styled-components";
import {
  faLocationDot,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexContainerColumnGapped } from "../shared/containers";

const Container = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .month {
    color: #f84856;
  }

  p {
    color: var(--color-gray) !important;
  }

  &:hover {
    .title {
      color: var(--color-primary) !important;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  background-color: var(--color-primary-transparent);
  padding: 24px;
  width: 400px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  border-radius: 5px;
  cursor: pointer;
`;

const CustomImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5px;

  transition: transform 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

interface Props {
  eventHref: string;
  month: string;
  date: string;
  title: string;
  timeDay: string;
  location: string;
  eventImg: StaticImageData;
}

const EventItem = ({
  eventHref,
  month,
  date,
  title,
  timeDay,
  location,
  eventImg,
}: Props) => {
  return (
    <Container>
      <a href={eventHref}>
        <ImageContainer>
          <CustomImage priority src={eventImg} alt="YCEM event banner" />
        </ImageContainer>
      </a>
      <Details>
        <FlexContainerColumnGapped>
          <h5 className="month">{month}</h5>
          <p style={{ fontWeight: 600 }}>{date}</p>
          <span></span>
        </FlexContainerColumnGapped>

        <div>
          <a href={eventHref}>
            <h5 className="title">{title}</h5>
          </a>
          <p>
            <FontAwesomeIcon
              icon={faCalendarAlt}
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
        </div>
      </Details>
    </Container>
  );
};

export default EventItem;
