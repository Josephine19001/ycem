import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHandHoldingDollar,
  faPeopleGroup,
  faHandshakeAngle
} from '@fortawesome/free-solid-svg-icons';

import IntroSection from '../shared/intro-section';
import {
  FlexContainerColumnGapped,
  FlexContainerRowSpaceBetween
} from '../shared/containers';
import ContactForm from '../shared/contact-form';
import VolunteerSection from '../shared/volunteer-form';

const Container = styled.div`
  display: flex;
  background-color: #fafafa;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 100px;

  justify-content: space-between;
  padding: var(--section-container-padding);
  margin-bottom: var(--section-wrapper-margin-bottom);
`;
const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <div>
      <IntroSection
        title="Get in Touch"
        subTitle="Need career advice or want to join our events? Let's have a chat."
      />
      <VolunteerSection />
      <Container>
        <LeftContainer>
          <h2>Let&apos;s Talk!</h2>
          <p>
            You can also contribute through donations, or collaborate with us to
            drive meaningful change in the engineering landscape, shaping the
            future of engineering together.
          </p>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <FlexContainerRowSpaceBetween
              style={{ justifyContent: 'flex-start' }}
              $gap="20px"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <p>
                <strong>General Info:</strong> info@ycem.org
              </p>
            </FlexContainerRowSpaceBetween>
            <FlexContainerRowSpaceBetween
              style={{ justifyContent: 'flex-start' }}
              $gap="20px"
            >
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              <p>
                <strong>Donate now:</strong> support@ycem.org
              </p>
            </FlexContainerRowSpaceBetween>
            <FlexContainerRowSpaceBetween
              style={{ justifyContent: 'flex-start' }}
              $gap="20px"
            >
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>
                <strong>Become a member:</strong> membership@ycem.org
              </p>
            </FlexContainerRowSpaceBetween>
            <FlexContainerRowSpaceBetween
              style={{ justifyContent: 'flex-start' }}
              $gap="20px"
            >
              <FontAwesomeIcon icon={faHandshakeAngle} />
              <p>
                <strong>Volunteer with us:</strong> volunteer@ycem.org
              </p>
            </FlexContainerRowSpaceBetween>
          </FlexContainerColumnGapped>
        </LeftContainer>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
