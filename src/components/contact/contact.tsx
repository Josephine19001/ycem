import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import IntroSection from "../shared/intro-section";
import { FlexContainerRowSpaceBetween } from "../shared/containers";
import ContactForm from "../shared/contact-form";

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
      <Container>
        <LeftContainer>
          <h2>Let&apos;s Talk!</h2>
          <p>
            You can also contribute through volunteering, donations, or
            collaborate with us to drive meaningful change in the engineering
            landscape, shaping the future of engineering together.
          </p>
          <FlexContainerRowSpaceBetween
            style={{ justifyContent: "flex-start" }}
            gap="20px"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <p>ycem-gh@gmail.com</p>
          </FlexContainerRowSpaceBetween>
        </LeftContainer>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
