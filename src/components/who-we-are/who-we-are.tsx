import React from "react";
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
import { aboutUsContent } from "../shared/constants";
import accraGirlGroupPic from "../../../public/assets/accra-girls-group.jpg";
import studentPic from "../../../public/assets/student.jpg";

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

  return (
    <div>
      <IntroSection
        title="Who We Are"
        subTitle="Empowering & Guiding young females in their Engineering journey"
      />

      <Section style={{ marginTop: "50px" }}>
        <AboutSectionContainer>
          <FlexContainerRowSpaceBetween gap="100px">
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
              <p>{aboutUsContent.text1}</p>
              <p>{aboutUsContent.text2}</p>
            </ContentWrapper>
          </FlexContainerRowSpaceBetween>
        </AboutSectionContainer>
        <Divider margin="50px 0" />
        <AboutSectionContainer>
          <FlexContainerRowSpaceBetween gap="100px">
            <ContentWrapper>
              <SectionTitle>Our Story & Mission</SectionTitle>
              <SectionDescription>
                Empowering the Future of Engineering
              </SectionDescription>
              <p>
                At YCEM, we are on a mission to empower the future of
                engineering by providing unwavering support and guidance to
                young women as they embark on their journey in science,
                technology, engineering, and mathematics. Our journey began in
                2022 with a simple yet powerful vision: to bridge the gender gap
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
              <h4 style={{ color: "var(--color-primary)" }}>
                Join Our Volunteer Team
              </h4>
              <p>
                Would you like to join our volunteer team at YCEM, explore our
                various volunteer opportunities, or contribute your time and
                skills to our mission?
              </p>
            </JoinUsWrapper>
            <ButtonPrimary onClick={() => router.push("/get-involve")}>
              Get involved
            </ButtonPrimary>
          </FlexContainerRowSpaceBetween>
        </JoinUsContainer>
      </Section>
    </div>
  );
};

export default WhoWeAre;
