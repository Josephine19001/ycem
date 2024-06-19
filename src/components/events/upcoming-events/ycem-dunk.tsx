import React from 'react';
import styled from 'styled-components';
import EventPage from '../event-page';
import banner from 'public/assets/events/cloud-banner.png';
import {
  FlexContainerColumn,
  FlexContainerColumnGapped
} from '../../shared/containers';

const Header = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--color-primary);
`;

const SubHeader = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 16px;
`;

const YcemAndDunk = () => {
  return (
    <EventPage
      timeDay={'Wednesday-Saturday'}
      date="August 21-23rd, 2024"
      location="In-Person, Accra"
      eventLink="https://www.gofundme.com/f/provide-a-computer-lab-and-training-to-dunk?utm_campaign=p_cp+fundraiser-sidebar&utm_medium=copy_link_all&utm_source=customer"
      eventBanner={banner}
      buttonLabel="Donate Now"
      description={
        <FlexContainerColumn style={{ alignItems: 'flex-start' }}>
          <Header>Objective</Header>
          <p>
            The YCEM and Dunk event is a 3-day event that aims to provide a
            computer lab and training to Dunk, a community in Accra. The event
            will feature a series of workshops and training sessions on basic
            computer skills, coding, and solving real-life problems with arduino
            and other tech-related topics. The goal is to empower the community
            members with the skills and knowledge they need to thrive in the
            digital age.
          </p>
          <Header>Projects</Header>
          <FlexContainerColumnGapped>
            <div>
              <SubHeader style={{ marginTop: '-4px' }}>
                Temperature-based Fans
              </SubHeader>
              <p>
                This project involves building fans that automatically turn on
                or adjust speed based on the temperature. This is particularly
                useful in Ghana, where the climate can be very hot, making it a
                practical solution for cooling homes and classrooms efficiently.
              </p>
              <p>
                <strong>Why:</strong> Learning how to build and program these
                fans will teach students about sensors, programming, and energy
                efficiency, all of which are important aspects of electrical
                engineering.
              </p>
            </div>
            <div>
              <SubHeader>ICT Introduction</SubHeader>
              <p>
                This project will introduce students to the basics of
                Information and Communication Technology (ICT), including how to
                use computers, navigate the internet, and understand the
                importance of digital literacy in today&apos;s world.
              </p>
              <p>
                <strong>Why:</strong> In a rapidly digitizing world, having a
                solid foundation in ICT is crucial. This project aims to bridge
                the digital divide and equip young girls with essential skills
                for future academic and career opportunities.
              </p>
            </div>
            <div>
              <SubHeader>Automated Plant Watering System</SubHeader>
              <p>
                This project will guide students in creating an automated system
                that waters plants based on soil moisture levels. This is
                particularly useful for agriculture in Ghana, where efficient
                water use is vital for crop success.
              </p>
              <p>
                <strong>Why:</strong> Agriculture is a significant part of
                Ghana&apos;s economy. Learning to automate plant watering
                introduces concepts of environmental sustainability,
                engineering, and technology, inspiring students to innovate in
                the agricultural sector.
              </p>
            </div>
          </FlexContainerColumnGapped>
        </FlexContainerColumn>
      }
    />
  );
};

export default YcemAndDunk;
