import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import IntroSection from "../shared/intro-section";
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
  Section,
} from "../shared/containers";
import { ButtonPrimary } from "../shared/buttons";
import { Divider } from "../shared/footer";
import {
  CardTitle,
  SectionDescription,
  SectionTitle,
} from "../shared/typography";
import { activities } from "../shared/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled(FlexContainerColumnSpaceBetween)`
  padding: var(--section-container-padding);
  align-items: flex-start;
  gap: 30px;
  margin-bottom: var(--section-wrapper-margin-bottom);
`;

const SectionUp = styled(FlexContainerColumnSpaceBetween)`
  gap: 20px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
const SectionDown = styled(FlexContainerRowSpaceBetween)`
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    gap: 20px;
  }
`;
const ContentWrapper = styled(FlexContainerColumnSpaceBetween)`
  gap: 20px;
  width: 250px;
  background-color: var(--bg-color-light);
  border-radius: 5px;
  padding: 12px 10px;
  align-items: flex-start;
  h6 {
    font-size: 15px;
    font-weight: 600;
  }
`;

const OpenPositionContainer = styled(FlexContainerColumnSpaceBetween)`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 50px;
  background-color: var(--color-secondary);
  color: var(--color-light);
  text-align: center;
  border-radius: 5px;
  gap: 20px;
  h2 {
    font-size: var(--font-size-header-one);
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 30px;

    h2 {
      font-size: 32px;
    }
  }
`;

const GetInvolve = () => {
  const router = useRouter();
  return (
    <div>
      <IntroSection
        title="Join Our Team"
        subTitle="Looking to Make a Difference? Join YCEM today and embark on a rewarding journey to empower young females in STEM!"
        otherCTA={
          <ButtonPrimary onClick={() => router.push("/who-we-are#team")}>
            Get to know the Team
          </ButtonPrimary>
        }
      />

      <Section style={{ marginTop: "50px" }}>
        <Container>
          <SectionUp>
            <SectionTitle>Activities</SectionTitle>
            <SectionDescription>
              Your future in Engineering starts here!
            </SectionDescription>
          </SectionUp>

          <SectionDown>
            {activities.map(({ label, description, icon }) => (
              <ContentWrapper key={label}>
                <FontAwesomeIcon
                  icon={icon}
                  size="3x"
                  color="var(--color-secondary)"
                />
                <CardTitle>{label}</CardTitle>
                <p>{description}</p>
              </ContentWrapper>
            ))}
          </SectionDown>
          <Divider margin="50px 0 50px 0" />
          <OpenPositionContainer>
            <h2>Do you want to support our initiative?</h2>
            <a href="/contact">
              <ButtonPrimary
                style={{
                  color: "var(--color-primary)",
                  backgroundColor: "var(--color-light)",
                }}
              >
                Get in touch with us
              </ButtonPrimary>
            </a>
          </OpenPositionContainer>
        </Container>
      </Section>
    </div>
  );
};

export default GetInvolve;
