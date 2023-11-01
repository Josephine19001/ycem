import React from "react";
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
import TeamItem from "./team-item";
import { aboutUsContent, teamInfo } from "../shared/constants";

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
        title="The team"
        subTitle="The Empowering & Guiding Team for Young Females in their Engineering Journey"
      />

      <Section
        style={{ paddingTop: isSmallScreen ? "5px" : "100px" }}
        id="team"
      >
        <FlexContainerRowSpaceBetween
          gap="20px"
          style={{ flexWrap: "wrap", justifyContent: "flex-start" }}
        >
          {teamInfo.map(
            ({ name, jobTitle, bioSummary, socialLinks, imgAlt, imgSrc }) => (
              <TeamItem
                key={name}
                name={name}
                jobTitle={jobTitle}
                bioSummary={bioSummary}
                socialLinks={socialLinks}
                imgAlt={imgAlt}
                imgSrc={imgSrc}
              />
            )
          )}
        </FlexContainerRowSpaceBetween>
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
            <ButtonPrimary onClick={() => router.push("/get-involved")}>
              Get involved
            </ButtonPrimary>
          </FlexContainerRowSpaceBetween>
        </JoinUsContainer>
      </Section>
    </div>
  );
};

export default WhoWeAre;
