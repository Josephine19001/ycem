import React from "react";
import styled from "styled-components";
import IntroSection from "../shared/intro-section";
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
  Section,
} from "../shared/containers";
import {
  faLinkedin,
  faTwitterSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SectionDescription, SectionTitle } from "../shared/typography";
import { ButtonPrimary } from "../shared/buttons";
import { useRouter } from "next/router";
import { Divider } from "../shared/footer";
import useSmallerScreens from "../../hooks/use-smaller-screens";
import TeamItem from "./team-item";

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
              <img
                src="https://res.cloudinary.com/josephine19001/image/upload/v1698594308/YCEM/plb2nxg2div6er4qsqrt.jpg"
                alt={`A a group picture of volunteer`}
              />
            </ImageContainer>
            <ContentWrapper>
              <SectionTitle>Who We Are</SectionTitle>
              <SectionDescription>
                Empowering Young Females in STEM Careers
              </SectionDescription>
              <p>
                YCEM, founded in 2022, is dedicated to empowering young females
                in their STEM careers. Our mission is to bridge the gender gap
                in STEM by providing opportunities, guidance, and hands-on
                experiences. We achieve this through a combination of events,
                mentoring, and tech hubs, fostering a supportive ecosystem for
                the future of women in technology.
              </p>
              <p>
                Since our start, we've achieved a significant milestone with an
                event at Accra Girls Secondary School in Ghana. This event was a
                testament to our commitment to inspiring and encouraging young
                women to pursue STEM fields. At YCEM, we believe that diversity
                in technology leads to innovation, and we're here to make that a
                reality. Join us on this empowering journey, and together, we'll
                shape the future of STEM careers for young females.
              </p>
            </ContentWrapper>
          </FlexContainerRowSpaceBetween>
        </AboutSectionContainer>
        <Divider margin="50px 0" />
        <AboutSectionContainer>
          <FlexContainerRowSpaceBetween gap="100px">
            <ContentWrapper>
              <SectionTitle>Our Story & Mission</SectionTitle>
              <SectionDescription>
                Empowering the Future of STEM
              </SectionDescription>
              <p>
                At YCEM, our mission is to empower the future of STEM by
                supporting and guiding young females on their journey in
                science, technology, engineering, and mathematics. Our story
                began in 2022 with a simple yet powerful goal: to bridge the
                gender gap in STEM and ensure that every young woman has the
                opportunity to thrive in these fields.
              </p>
              <p>
                As we took our first steps, we organized events, provided
                mentoring, and established tech hubs to create hands-on
                experiences. Each initiative aimed to inspire and nurture the
                potential of young females in STEM. Our journey is a testament
                to the transformative power of a shared purpose, dedication, and
                the belief that every young woman can contribute to the
                innovation and advancement of the digital world.
              </p>
              <p>
                Today, we stand as a driving force in the empowerment of young
                females in STEM, blending experience, mentorship, and a
                commitment to value. We are excited to continue this story of
                empowerment and technological evolution, paving the way for a
                brighter future in the world of science and technology.
              </p>
            </ContentWrapper>
            <ImageContainer>
              <img
                src="https://res.cloudinary.com/josephine19001/image/upload/v1698594309/YCEM/swri1kyt5nrash4zirr6.jpg"
                alt={`A a group picture of volunteer`}
              />
            </ImageContainer>
          </FlexContainerRowSpaceBetween>
        </AboutSectionContainer>
      </Section>

      <Section
        style={{ paddingTop: isSmallScreen ? "5px" : "100px" }}
        id="team"
      >
        <SectionDescription style={{ marginBottom: "32px" }}>
          The Team
        </SectionDescription>
        <FlexContainerRowSpaceBetween gap="20px">
          <TeamItem
            name="JOSEPHINE GYAMERA"
            jobTitle="Software Engineer"
            bioSummary="Josephine is our co-founder and has developed search strategies for a
          variety of clients from international brands to medium sized
          businesses for five years."
            socialLinks={[
              { link: "#", icon: faLinkedin },
              { link: "#", icon: faTwitterSquare },
              { link: "#", icon: faGithub },
            ]}
            imgAlt="Josephine's picture"
            imgSrc="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?w=1380&t=st=1698540066~exp=1698540666~hmac=ee71b495a1f76b1d0f1897fba0cbc5668076630b700d925abc7d5556c94eb6ad"
          />
          <TeamItem
            name="JOSEPHINE GYAMERA"
            jobTitle="Software Engineer"
            bioSummary="Josephine is our co-founder and has developed search strategies for a
          variety of clients from international brands to medium sized
          businesses for five years."
            socialLinks={[
              { link: "#", icon: faLinkedin },
              { link: "#", icon: faTwitterSquare },
              { link: "#", icon: faGithub },
            ]}
            imgAlt="Josephine's picture"
            imgSrc="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?w=1380&t=st=1698540066~exp=1698540666~hmac=ee71b495a1f76b1d0f1897fba0cbc5668076630b700d925abc7d5556c94eb6ad"
          />
          <TeamItem
            name="JOSEPHINE GYAMERA"
            jobTitle="Software Engineer"
            bioSummary="Josephine is our co-founder and has developed search strategies for a
          variety of clients from international brands to medium sized
          businesses for five years."
            socialLinks={[
              { link: "#", icon: faLinkedin },
              { link: "#", icon: faTwitterSquare },
              { link: "#", icon: faGithub },
            ]}
            imgAlt="Josephine's picture"
            imgSrc="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?w=1380&t=st=1698540066~exp=1698540666~hmac=ee71b495a1f76b1d0f1897fba0cbc5668076630b700d925abc7d5556c94eb6ad"
          />
        </FlexContainerRowSpaceBetween>
      </Section>

      <Section style={{ paddingBottom: isSmallScreen ? "5px" : "100px" }}>
        <JoinUsContainer>
          <FlexContainerRowSpaceBetween>
            <JoinUsWrapper>
              <h4 style={{ color: "var(--text-color)" }}>
                Join Our Volunteer Team
              </h4>
              <p>
                Are you interested in joining our volunteer team at YCEM,
                exploring our volunteer opportunities, or simply want to
                contribute your time and skills to our mission?
              </p>
            </JoinUsWrapper>
            <ButtonPrimary onClick={() => router.push("/get-involve")}>
              Get involve
            </ButtonPrimary>
          </FlexContainerRowSpaceBetween>
        </JoinUsContainer>
      </Section>
    </div>
  );
};

export default WhoWeAre;
