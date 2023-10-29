import React from "react";
import styled from "styled-components";
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
  Section,
} from "../shared/containers";
import {
  CardTitle,
  SectionDescription,
  SectionTitle,
} from "../shared/typography";
import { homeServiceSectionContent } from "../shared/constants";
import JoiningUs from "../shared/joining-us";
import { Divider } from "../shared/footer";
import {
  AboutSectionContainer,
  ContentWrapper,
  ImageContainer,
} from "../who-we-are/who-we-are";

// Solutions Section Components
const ServicesSectionContainer = styled(FlexContainerRowSpaceBetween)`
  padding: var(--section-container-padding);
  border: 1px solid var(--bg-color-light);
  align-items: flex-start;
  gap: 20px;
`;

const ServicesSectionLeft = styled(FlexContainerColumnSpaceBetween)`
  gap: 20px;
  align-items: flex-start;
  padding-right: 100px;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;
const ServicesSectionRight = styled(FlexContainerRowSpaceBetween)`
  flex-wrap: wrap;
  gap: 20px;
`;
const ServiceWrapper = styled(FlexContainerColumnSpaceBetween)`
  gap: 12px;
  width: 250px;
  align-items: flex-start;
  background-color: var(--bg-color-light);
  border-radius: 5px;
  padding: 12px 10px;
  h6 {
    font-size: 15px;
    font-weight: 600;
  }
  img {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HeroSection = styled(Section)`
  background: center / cover no-repeat
    url("https://res.cloudinary.com/josephine19001/image/upload/v1698599943/YCEM/mtckwjjqapvbqh8xvpwq.jpg");
  position: relative;

  width: calc(100% + 390px);
  margin: 0 -195px;

  #hero-text {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .hero-inner-content {
    padding: 32px;
    background-color: var(--color-light);
    width: 50%;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media only screen and (max-width: 768px) {
    #hero-text {
      height: 50vh;
    }
    .hero-inner-content {
      display: none;
    }
    h1 {
      font-size: 1.2rem;
    }
  }

  #overlay {
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
  }
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <div id="hero-text">
          <div className="hero-inner-content">
            <h1>Empowering Girls, Changing Lives</h1>
            <p>
              At YCEM, we believe that every woman has the power to engineer her
              own future. Our mission is to provide the tools, resources, and
              support needed to empower women of all ages and backgrounds.
              Together, we can create a world where every woman's choices matter
              and where she can thrive and succeed in all aspects of life.
            </p>
          </div>
        </div>
        <div id="overlay"></div>
      </HeroSection>

      <Section>
        <ServicesSectionContainer>
          <ServicesSectionLeft>
            <SectionTitle>Activities</SectionTitle>
            <SectionDescription>
              Your Future In Engineering Starts Here!
            </SectionDescription>
          </ServicesSectionLeft>
          <ServicesSectionRight>
            {homeServiceSectionContent.map(({ icon, title, description }) => (
              <ServiceWrapper key={title}>
                <img
                  src={icon}
                  alt={`An image depicting ${title}`}
                  width="100px"
                  height="100px"
                />
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
              </ServiceWrapper>
            ))}
          </ServicesSectionRight>
        </ServicesSectionContainer>
      </Section>

      <Divider margin="50px 0" />

      <Section>
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
      </Section>

      <Divider margin="50px 0" />

      <JoiningUs />
    </div>
  );
};

export default Home;
