import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import IntroSection from "../shared/intro-section";
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
  Section,
} from "../shared/containers";
import { SectionDescription, SectionTitle } from "../shared/typography";
import { ButtonPrimary } from "../shared/buttons";
import { useRouter } from "next/router";
import { Divider } from "../shared/footer";
import useSmallerScreens from "../../hooks/use-smaller-screens";
import accraGirlGroupPic from "public/hero/accra-girls-group.jpg";
import studentPic from "public/ycem-talk2.jpg";
import ContactFormModal from "../shared/contact-form-modal";

export const AboutSectionContainer = styled(FlexContainerColumnSpaceBetween)`
  gap: 20px;
  align-items: flex-start;
`;
export const ImageContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled(FlexContainerColumnSpaceBetween)`
  gap: 20px;
  align-items: flex-start;
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    img {
      display: none;
    }
  }
`;

const JoinUsContainer = styled.div`
  padding: 20px;
  background-color: var(--color-primary-transparent);
  border-radius: 5px;
  margin-top: var(--section-wrapper-margin-top);
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const JoinUsWrapper = styled(FlexContainerColumnSpaceBetween)`
  width: 50%;
  align-items: flex-start;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const WhoWeAre = () => {
  const router = useRouter();
  const isSmallScreen = useSmallerScreens();
  const [openContactModal, setOpenContactModal] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <IntroSection
        title="Who We Are"
        subTitle="Empowering & Guiding young females in their Engineering journey"
      />

      <Section style={{ marginTop: "50px" }}>
        <AboutSectionContainer>
          <FlexContainerRowSpaceBetween $gap="100px">
            <ImageContainer>
              <Image
                priority
                src={accraGirlGroupPic}
                alt={"A team picture from our visit to Accra girls"}
              />
            </ImageContainer>
            <ContentWrapper>
              <SectionTitle>Who We Are</SectionTitle>
              <SectionDescription>
                Empowering Young Females in their Engineering Careers
              </SectionDescription>
              <p>
                YCEM, established in 2021, is dedicated to empowering young
                females into their engineering careers. Our mission is to bridge
                the gender gap in Engineering by providing opportunities,
                guidance, and hands-on experiences. We achieve this through a
                combination of events, mentorship, and hubs, fostering a
                supportive ecosystem for the future of young females in
                technology.
              </p>

              <p>
                At YCEM, we recognize that diversity in engineering, spanning a
                wide array of domains including software, AI/ML, food
                engineering, materials, cloud engineering, and research, leads
                to innovation. We are proud of our diverse team, representing
                various engineering domains, and we&apos;re here to make
                diversity in engineering a reality. Join us on this empowering
                journey, and together, we&apos;ll shape the future of
                engineering careers for young females.
              </p>
            </ContentWrapper>
          </FlexContainerRowSpaceBetween>
        </AboutSectionContainer>
        <Divider margin="50px 0" />
        <AboutSectionContainer>
          <FlexContainerRowSpaceBetween $gap="100px">
            <ContentWrapper>
              <SectionTitle>Our Story & Mission</SectionTitle>
              <SectionDescription>
                Empowering Her Future In Engineering
              </SectionDescription>
              <p>
                At YCEM, we are on a mission to empower the future of
                engineering by providing unwavering support and guidance to
                young women as they embark on their journey in science,
                technology, engineering, and mathematics. Our journey began in
                2021 with a simple yet powerful vision: to bridge the gender gap
                in engineering and ensure that every young woman has the
                opportunity to excel in these fields.
              </p>
              <p>
                From our very first steps, we have been organizing events,
                offering mentorship, and establishing tech hubs to create
                hands-on experiences. Each initiative is designed to ignite the
                passion and potential of young women in the field of
                engineering. Our story stands as a testament to the
                transformative impact of a shared purpose, unwavering
                dedication, and the belief that every young woman can make
                meaningful contributions to the innovation and progress of the
                digital world.
              </p>
              <p>
                Today, we stand as a driving force in the empowerment of young
                women in engineering, combining extensive experience, dedicated
                mentorship, and a steadfast commitment to excellence. We are
                thrilled to continue this journey of empowerment and
                technological advancement, leading the way to a brighter future
                in the realm of science and technology.
              </p>
            </ContentWrapper>
            <ImageContainer>
              <Image
                priority
                height={200}
                width={400}
                src={studentPic}
                alt={
                  "A picture of an Accra girls secondary school student speaking"
                }
              />
            </ImageContainer>
          </FlexContainerRowSpaceBetween>
        </AboutSectionContainer>
      </Section>

      <Section style={{ paddingBottom: isSmallScreen ? "5px" : "100px" }}>
        <JoinUsContainer>
          <FlexContainerRowSpaceBetween>
            <JoinUsWrapper>
              <h4 style={{ color: "var(--color-primary)" }}>Work with us</h4>
              <p>
                Do you want to help push this initiative? Do you have a project
                in mind you&apos;d like to collaborate with us?
              </p>
            </JoinUsWrapper>
            <ButtonPrimary onClick={() => setOpenContactModal(true)}>
              Contact our team
            </ButtonPrimary>
          </FlexContainerRowSpaceBetween>
        </JoinUsContainer>
        {openContactModal && (
          <ContactFormModal
            open={openContactModal}
            email={email}
            handleCloseModal={() => setOpenContactModal(false)}
          />
        )}
      </Section>
    </div>
  );
};

export default WhoWeAre;
