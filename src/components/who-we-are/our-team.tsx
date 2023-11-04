import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import elizabethPic from "../../../public/assets/team-pictures/elizabeth.png";
import josephinePic from "../../../public/assets/team-pictures/josephine.jpg";
import vanessaPic from "../../../public/assets/team-pictures/vanessa.jpg";
import karecePic from "../../../public/assets/team-pictures/karece.jpg";
import hilaryPic from "../../../public/assets/team-pictures/hilary.png";
import abenaPic from "../../../public/assets/team-pictures/abena.jpeg";
import daniellePic from "../../../public/assets/team-pictures/danielle.png";
import florentynaPic from "../../../public/assets/team-pictures/florentyna.jpeg";
import gertrudePic from "../../../public/assets/team-pictures/gertrude.png";
import nadeshPic from "../../../public/assets/team-pictures/nadesh.jpeg";
import ursulaPic from "../../../public/assets/team-pictures/ursula.jpeg";
import oforiwaaPic from "../../../public/assets/team-pictures/oforiwaa.jpeg";
import perpetualPic from "../../../public/assets/team-pictures/perpetual.jpeg";
import jecholiahPic from "../../../public/assets/team-pictures/jecholiah-pic.jpg";

import IntroSection from "../shared/intro-section";
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
  Section,
} from "../shared/containers";
import { ButtonPrimary } from "../shared/buttons";
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
const SectionContainer = styled(Section)`
  width: calc(100% + 390px);
  margin: 0 -195px;

  margin-top: 100px;
  padding: 0 100px;
  @media only screen and (max-width: 768px) {
    width: calc(100% + 48px);
    margin: 0 -24px;
    margin-top: 10px;
    padding: 0 10px;
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
      <SectionContainer>
        <FlexContainerRowSpaceBetween
          $gap={"40px"}
          style={{ flexWrap: "wrap" }}
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
      </SectionContainer>
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

export const teamInfo = [
  {
    name: "Thelma Hilary N.A Laryea",
    jobTitle: "Production Performance Engineer(Hubtel), AWS Community Builder",
    bioSummary:
      "Thelma is a cloud enthusiast who is passionate about cloud engineering and architecture. She is passionate about teaching and empowering young girls and loves reading, swimming, yoga and creative writing ",
    socialLinks: [
      {
        link: "https://fi.linkedin.com/in/gyamerajosephine ",
        icon: faLinkedin,
      },
      { link: "https://github.com/tayelma", icon: faGithub },
    ],
    imgAlt: "Hilary's profile picture",
    imgSrc: hilaryPic,
  },
  {
    name: "JOSEPHINE GYAMERA",
    jobTitle:
      "Software engineer at Unity Technologies in Helsinki & Graduate student in Software Engineering at the University of Turku.",
    bioSummary:
      "Josephine, an experienced software engineer specializing in full-stack development, is dedicated to empowering women in the tech industry. She shares her expertise through her tech-related blog and actively engages in initiatives that empower young females in tech. Beyond her professional life, Josephine enjoys sports, cooking, and embarking on new DIY projects.",
    socialLinks: [
      {
        link: "https://fi.linkedin.com/in/gyamerajosephine ",
        icon: faLinkedin,
      },
      { link: "https://gyamera-josephine.vercel.app/blog", icon: faBlog },
      { link: "https://github.com/Josephine19001", icon: faGithub },
    ],
    imgAlt: "Josephine Gyamera's profile picture",
    imgSrc: josephinePic,
  },
  {
    name: "Vanessa Adjei",
    jobTitle: "Software Architect, Technology Advantage Group",
    bioSummary:
      "Vanessa is a highly motivated professional with expertise in web and mobile application development, data analysis, and system architecture. With a strong foundation in programming and a passion for innovation, she is dedicated to contributing to cutting-edge projects in system development.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/vanessa-adjei-794455195/",
        icon: faLinkedin,
      },
      {
        link: "https://github.com/VanessaAdjei",
        icon: faGithub,
      },
    ],
    imgAlt: "Vanessa's profile picture",
    imgSrc: vanessaPic,
  },
  {
    name: "Elizabeth Boamah",
    jobTitle:
      "Materials Science & Engineering student (MPhil), University of Ghana & Energy engineer stagaire, IMT-Mines, Albi.",
    bioSummary:
      "Elizabeth, an energy engineer with speciality in Pyrolysis conversion of plastics to fuel (Liquid, solid & gas) energy, is dedicated to teaching and empowering people, she loves what she does. Beyond her professional life, Elizabeth finds interests in reading, exploring different cuisines, traveling and spending time with the family.",
    socialLinks: [
      {
        link: "www.linkedin.com/in/elizabeth-boamah-a08997182",
        icon: faLinkedin,
      },
      {
        link: "https://www.researchgate.net/profile/Elizabeth-Boamah-3",
        icon: faBlog,
      },
    ],
    imgAlt: "Elizabeth Boamah's profile picture",
    imgSrc: elizabethPic,
  },
  {
    name: "Abena Agyeiwaa Obom ",
    jobTitle: "Food Process Engineer",
    bioSummary:
      "Agyeiwaa is a dynamic young food process engineer. Her passion lies in pioneering innovative solutions and driving continuous improvement in the food industry.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/abena-agyeiwaa-obom-638270239",
        icon: faLinkedin,
      },
      { link: "https://github.com/Agyeiwaa9", icon: faGithub },
    ],
    imgAlt: "Abena's profile picture",
    imgSrc: abenaPic,
  },
  {
    name: "Nadesh Kwakye",
    jobTitle: "Materials Engineer",
    bioSummary:
      "Nadesh is a materials scientist and engineer who is passionate about developing novel, affordable, and highly efficient catalytic nanomaterials for healthcare delivery. Her research revolves around the development polymer composites as drug delivery vehicles for cancer therapy. In her free time, she loves to film and edit videos, read business books, and watch Korean Drama.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/kwakye-nadesh-502044183",
        icon: faLinkedin,
      },
    ],
    imgAlt: "Nadesh's profile picture",
    imgSrc: nadeshPic,
  },
  {
    name: "Perpetual Napoga Nin-yenle",
    jobTitle: "Agricultural Engineer. Data Science and AI student at Tech4Dev.",
    bioSummary:
      "Perpetual is a dedicated agriculture enthusiast who merges her passion for technology and agriculture. She is aspiring to excel  in Data Science and AI. Perpetual is a charismatic leader and she is committed to community service and enjoys assisting others who need her help",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/perpetual-napoga-nin-yenle-16530318a/",
        icon: faLinkedin,
      },
    ],
    imgAlt: "Perpetual's profile picture",
    imgSrc: perpetualPic,
  },
  {
    name: "Gertrude Asumpaame Alayine",
    jobTitle: " Postgraduate Associate, School of Medicine, Yale University",
    bioSummary:
      "Gertrude is a computational neuroscience researcher whose research focuses on using machine learning and other computational methods to improve upon the mental health of individuals. She is passionate about community giveback and engages in extracurricular activities that will enable her do so, including mentoring young women.",
    socialLinks: [
      {
        link: "linkedin.com/in/gertrude-asumpaame-alayine",
        icon: faLinkedin,
      },
    ],
    imgAlt: "Gertrude's profile picture",
    imgSrc: gertrudePic,
  },
  {
    name: "Dominica Abena Oforiwaa Amanfo",
    jobTitle:
      "AI/ML engineer at 4th-ir, headquartered in Lucerne, Switzerland. Graduate student at the Hochschule Lucerne, studying Applied information and data science.",
    bioSummary:
      "She is currently an Arm Ambassador, a volunteer for Arm's (E3)NGAGE program, Embedded Learning Challenge (ELC), and is an active member of the IEEE community. She has earned a reputation as an exemplary leader who is driven by challenges, unafraid of obstacles, and dedicated to advancing standards of excellence in STEM education, especially in females. She enjoys her career, teaching, traveling, playing the piano, classical music, swimming, and reading.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/dominicaamanfo/",
        icon: faLinkedin,
      },
      { link: "https://github.com/dominica-ofoj", icon: faGithub },
    ],
    imgAlt: "Dominica's profile picture",
    imgSrc: oforiwaaPic,
  },
  {
    name: "Florentyna Anima Boakye Yiadom",
    jobTitle:
      "Biomedical Engineer, Content Developer- Mon and Associates Technology, Editor-Hitex Editex Company & Entrepreneur.",
    bioSummary:
      "Florentyna is an enthusiast in the delivery of safe and suitable healthcare using quality and affordable medical devices. She is passionate about impacting knowledge skills to the younger generation, especially encouraging young females into discovering their full potentials in various areas such as engineering,technology and entrepreneurship.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/florentyna-boakye-yiadom-",
        icon: faLinkedin,
      },
    ],
    imgAlt: "Florentyna's profile picture",
    imgSrc: florentynaPic,
  },
  {
    name: "Danielle Patricia Akweley Quaye",
    jobTitle: "Biomedical Engineer",
    bioSummary:
      "Danielle Patricia Akweley Quaye is a biomedical engineer, an entrepreneur and  an aspiring cocoa farmer. From 2018 to date, she has been a volunteer as a youth worker at the Youth Arise Organization (YAO) and a teacher volunteer with the Literacy Impact Project (LIP) since 2022. She has certification in IoT, Arduino and 3D modeling from the TechEra organization Ghana. She is working as a biomedical trainee at the 37 Military Hospital, Ghana with the hopes of becoming a full-time biomedical engineer. She loves to cook, listen to music and hang out with family and close friends",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/danielle-quaye-ab6253182",
        icon: faLinkedin,
      },
    ],
    imgAlt: "Danielle's profile picture",
    imgSrc: daniellePic,
  },
  {
    name: "Ursula Senam Nkonu",
    jobTitle: "Biomedical Engineer",
    bioSummary:
      "Ursula is a Biomedical Engineer who is passionate about using data science, machine learning and bioinformatics to advance cancer research. She is enthusiastic about empowering girls and women to break into the fields of engineering and technology. She is also a fellow at Black Sisters in STEM, a nonprofit organization committed to digitizing and developing the world’s best talent with a focus on Black women. In her free time, she loves reading, watching animated shows, and tv series.",
    socialLinks: [
      {
        link: "www.linkedin.com/in/ursula-nkonu",
        icon: faLinkedin,
      },
    ],
    imgAlt: "Ursula's profile picture",
    imgSrc: ursulaPic,
  },
  {
    name: "Jecholiah Afua Antwiwaa Opare",
    jobTitle:
      "Biomedical Engineer Intern at UGMC / Front-End Developer Trainee at Azubi Africa",
    bioSummary:
      "Jecholiah Afua Antwiwaa Opare is a versatile professional actively pursuing a dual-track career. As  a Biomedical Engineer Intern, Jecholiah is dedicated to advancing healthcare through research and innovative medical solutions. Simultaneously, she is honing her skills as a Front-End Developer Trainee by creating user-friendly web applications, combining technology and design to deliver exceptional user experiences.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/jecholiahopare",
        icon: faLinkedin,
      },
      {
        link: "https://github.com/Jecholiah001",
        icon: faGithub,
      },
    ],
    imgAlt: "Jecholiah's profile picture",
    imgSrc: jecholiahPic,
  },
];
