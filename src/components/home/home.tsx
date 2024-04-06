import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  FlexContainerColumnCenter,
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
import home1 from "../../../public/home/home1.jpg";
import home2 from "../../../public/home/home2.jpg";
import HeroCarousel from "./carouselImage";
import Event from "./events";
import Link from "next/link";
import PhotoCollage from "./photo-collage";
import Dashboard from "./achievements";

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
        <HeroCarousel />
      </HeroSection>

      <Section style={{ marginTop: "50px" }}>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div
                  className="position-relative overflow-hidden h-100"
                  style={{ minHeight: "400px" }}
                >
                  <Image
                    className="position-absolute w-100 h-100 pt-5 pe-5"
                    src={home1}
                    alt=""
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                  <SectionTitle>About us</SectionTitle>

                  <SectionDescription style={{ margin: "16px 0" }}>
                    We Encourage Careers in Engineering for Young Ladies
                  </SectionDescription>
                  <div className="about-home p-4 mb-4">
                    <p className="text-dark mb-2 ">
                      YCEM is dedicated to empowering young females in
                      engineering, bridging the gender gap through events,
                      mentorship, and hands-on experiences.
                    </p>
                    <span style={{ color: "var(--color-primary)" }}>
                      Founded in 2021
                    </span>
                  </div>
                  <p className="mb-5">
                    We inspire and encourage young women to pursue engineering
                    fields, fostering innovation and diversity. Join us to shape
                    the future of engineering careers for young females.
                  </p>
                  <FlexContainerRowSpaceBetween
                    style={{ justifyContent: "flex-start" }}
                  >
                    <Link
                      className="btn btn-primary py-2 px-3 me-3 btn-with-arrow"
                      href="/who-we-are"
                    >
                      <span style={{ marginRight: "5px" }}>Learn More</span>
                      <span
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ color: "var(--color-primary)" }}
                        />
                      </span>{" "}
                    </Link>
                    <Link
                      className="btn btn-outline-primary py-2 px-3 btn-with-arrow"
                      href="/contact"
                    >
                      Contact Us
                      <div
                        style={{
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ color: "white" }}
                        />
                      </div>
                    </Link>
                  </FlexContainerRowSpaceBetween>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Divider margin="50px 0" />

      <Section>
        <FlexContainerColumnCenter>
          <SectionTitle>Highlights</SectionTitle>
          <SectionDescription>
            Achievements and events Highlights.
          </SectionDescription>
        </FlexContainerColumnCenter>
        <Dashboard />
        <PhotoCollage />
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

      <Section>
        <Event />
      </Section>

      <Divider margin="50px 0" />

      <JoiningUs />
    </div>
  );
};

export default Home;
