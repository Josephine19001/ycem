import React from "react";
import Image from "next/image";
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
import { homeServiceSectionContent, aboutUsContent } from "../shared/constants";
import JoiningUs from "../shared/joining-us";
import { Divider } from "../shared/footer";
import {
  AboutSectionContainer,
  ContentWrapper,
  ImageContainer,
} from "../who-we-are/who-we-are";
import heroBgImage from "../../../public/assets/hero-bg.jpeg";
import accraGirlGroupPic from "../../../public/assets/accra-girls-group.jpg";

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
  gap: 16px;
  width: 250px;
  align-items: flex-start;
  background-color: var(--bg-color-light);
  border-radius: 5px;
  padding: 12px 10px;
  h6 {
    font-size: 15px;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HeroSection = styled(Section)`
  background: none;
  position: relative;

  width: calc(100% + 390px);
  margin: 0 -195px;

  #hero-text {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .hero-inner-content {
    padding: 48px 32px;
    background-color: var(--color-light);
    width: 50%;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
      color: var(--color-primary);
    }
    p {
      color: var(--color-dark);
      line-height: 30px;
    }

    h1 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 18px 12px;

    h1 {
      line-height: 40px !important;
    }
    p {
      color: var(--color-dark);
      line-height: 30px;
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

const HeroImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const ActivityImageContainer = styled.div`
  width: 200px;
  img {
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <HeroImage
          priority
          src={heroBgImage}
          alt="Hero Image Alt Text"
          layout="fill"
          objectFit="cover"
        />
        <div id="hero-text">
          <div className="hero-inner-content">
            <h1>Empowering HER Future in Engineering</h1>
            <p>
              At YCEM, we believe that every young girl has the power to
              engineer her own future. Our mission is to provide the tools,
              resources, and support needed to empower young girls of all ages
              and backgrounds to succeed and overcome barriers. Together, we can
              create a world where every girl's choice matters, where she can
              make meaningful decisions in the engineering fields that will
              accentuate her strengths, and where she can thrive and succeed
              in all aspects of life.
            </p>
          </div>
        </div>
        <div id="overlay"></div>
      </HeroSection>

      <Section style={{ marginTop: "50px" }}>
        <AboutSectionContainer>
          <FlexContainerRowSpaceBetween $gap="100px">
            <ImageContainer>
              <Image
                priority
                src={accraGirlGroupPic}
                alt={`A a group picture of volunteer`}
                style={{ width: "100%" }}
              />
            </ImageContainer>
            <ContentWrapper>
              <SectionTitle>Who We Are</SectionTitle>
              <SectionDescription>
                Empowering Young Females in Engineering Careers
              </SectionDescription>
              <p>{aboutUsContent.text1}</p>
              <p>{aboutUsContent.text2}</p>
            </ContentWrapper>
          </FlexContainerRowSpaceBetween>
        </AboutSectionContainer>
      </Section>
      <Divider margin="50px 0" />

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
                <ActivityImageContainer>
                  <Image
                    priority
                    src={icon}
                    alt={`An image depicting ${title}`}
                  />
                </ActivityImageContainer>
                <div>
                  <CardTitle style={{ marginBottom: "5px" }}>{title}</CardTitle>
                  <p>{description}</p>
                </div>
              </ServiceWrapper>
            ))}
          </ServicesSectionRight>
        </ServicesSectionContainer>
      </Section>
      <Divider margin="50px 0" />

      <JoiningUs />
    </div>
  );
};

export default Home;
