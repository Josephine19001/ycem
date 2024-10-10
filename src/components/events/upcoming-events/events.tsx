import React from 'react';
import styled from 'styled-components';
import { FlexContainerRowSpaceBetween } from '../../shared/containers';
import InpageNav from '../in-page-nav';
import EventItem from '../event-list-item';
import ycemDunk from 'public/assets/events/ycem-dunk.png';

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
                location
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
              {' '}
              We are currently planning our next event. Be on the lookout😇
            </p>
          )}
        </Container>
      </Wrapper>
    </InpageNav>
  );
};

export default UpcomingEvents;

export const events: any[] = [];
