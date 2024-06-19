import Image from 'next/image';
import styled from 'styled-components';
import { SectionDescription, SectionTitle } from '../shared/typography';
import { ButtonPrimary } from '../shared/buttons';
import Link from 'next/link';

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
  width: 100%;
  padding-bottom: calc(100% + 70px);
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
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
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  border-radius: 10px;
  transition: opacity 0.5s;
`;

const EventItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  &:hover ${EventContent} {
    opacity: 1;
  }
`;

const EventItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const EventItemWrapper = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 33.33%;
  }
`;

type IProps = {
  incomingEvents: any;
};

const Event = ({ incomingEvents }: IProps) => {
  return (
    <ContainerFluid className="container-fluid project py-5 mb-5">
      <Container>
        <EventHeader
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: '600px' }}
        >
          <SectionTitle>Events</SectionTitle>
          <SectionDescription style={{ margin: '16px 0' }}>
            Upcoming Events
          </SectionDescription>
          <Link href="/events/upcoming-events">
            <ButtonPrimary>Upcoming Events</ButtonPrimary>
          </Link>
        </EventHeader>
        <EventItemsContainer>
          {incomingEvents.slice(0, 3).map((event: any, index: any) => (
            <EventItemWrapper
              key={index}
              className="wow fadeIn"
              data-wow-delay={`.${3 + index * 2}s`}
            >
              <EventItem className="project-item">
                <EventImg className="project-img">
                  <Image
                    src={event.eventImg}
                    priority
                    className="img-fluid rounded"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                  <EventContent className="project-content">
                    <Link href={event.eventHref}>
                      <ButtonPrimary>Read More</ButtonPrimary>
                    </Link>
                  </EventContent>
                </EventImg>
              </EventItem>
            </EventItemWrapper>
          ))}
        </EventItemsContainer>
      </Container>
    </ContainerFluid>
  );
};

export default Event;
