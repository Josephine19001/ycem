import React from "react";
import { useRouter } from "next/router";

import sallyPic from "../../../public/assets/team-pictures/uni-reps/sally-aba.jpg";
import janjayPic from "../../../public/assets/team-pictures/uni-reps/janjay.jpg";
import ruthPic from "../../../public/assets/team-pictures/uni-reps/ruth.jpg";

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
        subTitle="Advocating & Supporting YCEM Initiatives in the Engineering Journey of Young Females"
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
  {
    name: "Melrick Janjay Willie",
    jobTitle: "Biomedical Engineering student, Valley View University, Ghana",
    bioSummary:
      "Janjay, a nature enthusiast, is her happy place, whether it's soaking up the sunshine or exploring hidden trails. Good music always lifts her spirits, and capturing nature's beauty through photography brings her immense joy. Looking ahead, She’s eager to dive into the worlds of informatics and data analysis, expanding her skills and knowledge. Ultimately, Her strive for a life filled with purpose and fulfillment, using her talents to make a positive impact. As her favorite quote says, anything teachable is learnable, and She believes real change starts with each of us taking action. Let's connect and learn from each other!",

    imgAlt: "Janjay's profile picture",
    imgSrc: janjayPic,
    isNotStatic: false,
    socialLinks: [],
  },
  {
    name: "Ruth Siantey",
    jobTitle: "Biomedical Engineering student, University of Ghana",
    bioSummary:
      "Ruth is a dedicated student in the Biomedical Engineering field and deeply committed to empowering women in technology. She actively advocate for gender equality and inclusion in the tech industry. Outside of her engineering endeavors, Ruth finds joy in visiting high schools to empower young girls and indulge in her passion for cooking. Through education, mentorship, and embracing diversity, she strive to create a world where every woman's voice is heard and her potential in tech is realized. Join her (together with YCEM) on this empowering journey as we shape the future of technology together.",

    imgAlt: "Ruth's profile picture",
    imgSrc: ruthPic,
    isNotStatic: false,
    socialLinks: [],
  },
];
