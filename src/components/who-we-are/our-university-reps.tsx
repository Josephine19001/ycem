import React from "react";
import { useRouter } from "next/router";

import sallyPic from "../../../public/assets/team-pictures/uni-reps/sally-aba.jpg";

import IntroSection from "../shared/intro-section";
import { FlexContainerRowSpaceBetween, Section } from "../shared/containers";
import { ButtonPrimary } from "../shared/buttons";
import useSmallerScreens from "../../hooks/use-smaller-screens";
import TeamItem from "./team-item";
import { JoinUsContainer, JoinUsWrapper, SectionContainer } from "./our-team";

const OurUniversityRepresentatives = () => {
  const router = useRouter();
  const isSmallScreen = useSmallerScreens();

  return (
    <div>
      <IntroSection
        title="Our University Representatives"
        subTitle="Advocating & Supporting for YCEM Initiatives in the Engineering Journey of Young Females"
      />
      <SectionContainer>
        <FlexContainerRowSpaceBetween
          $gap={"40px"}
          style={{ flexWrap: "wrap", justifyContent: "flex-start" }}
        >
          {uniRepsInfo.map(
            ({
              name,
              jobTitle,
              bioSummary,
              socialLinks,
              imgAlt,
              imgSrc,
              isNotStatic,
            }) => (
              <TeamItem
                key={name}
                name={name}
                jobTitle={jobTitle}
                bioSummary={bioSummary}
                socialLinks={socialLinks}
                imgAlt={imgAlt}
                imgSrc={imgSrc}
                isNotStatic={isNotStatic}
              />
            )
          )}
        </FlexContainerRowSpaceBetween>
      </SectionContainer>
      <Section style={{ paddingBottom: isSmallScreen ? "5px" : "100px" }}>
        <JoinUsContainer>
          <FlexContainerRowSpaceBetween>
            <JoinUsWrapper>
              <h4 style={{ color: "var(--color-primary)" }}>
                Join Our University Reps Team
              </h4>
              <p>
                Are you currently a student in a university who is passionate
                about contributing to the engineering community? We are looking
                for passionate and dedicated individuals who are willing to help
                us in our mission to empower more females in the engineering
                space.
              </p>
            </JoinUsWrapper>
            <ButtonPrimary onClick={() => router.push("/get-involved")}>
              Reach out to us
            </ButtonPrimary>
          </FlexContainerRowSpaceBetween>
        </JoinUsContainer>
      </Section>
    </div>
  );
};

export default OurUniversityRepresentatives;

export const uniRepsInfo = [
  {
    name: "Sally Aba Assifuah",
    jobTitle: "Biomedical Engineering student, University of Ghana",
    bioSummary:
      "Sally is a student pursuing her undergraduate degree in Biomedical Engineering at the University of Ghana. She has a passion for bringing joy to others through humor. She finds solace in the sea and takes pleasure in good cuisine. She has a knack for discovering simpler methods to accomplish tasks. She has a keen interest in data analysis, UI/UX design, fashion and graphic design. Her ultimate goal is to make her family happy and to contribute positively to society.",

    imgAlt: "Sally's profile picture",
    imgSrc: sallyPic,
    isNotStatic: false,
    socialLinks: [],
  },
];
