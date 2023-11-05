import {
  faBoxesStacked,
  faRobot,
  faDiagramProject,
  faWindowMaximize,
  faPersonChalkboard,
  faToolbox,
  faListCheck,
  faPeopleCarryBox,
  faRocket,
  faPenRuler,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import elizabethPic from "../../../public/assets/team-pictures/elizabeth.png";
import josephinePic from "../../../public/assets/team-pictures/josephine.jpg";

import mentoringPic from "../../../public/assets/mentor.jpg";
import volunteeringPic from "../../../public/assets/volunteering.jpg";
import techTalkPic from "../../../public/assets/tech-talks.jpg";
import communityPic from "../../../public/assets/community.jpg";

export const navItems = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/events/upcoming-events",
    label: "Events",
  },
  {
    href: "/who-we-are",
    label: "Who We Are",
    hasDropdown: true,
    subMenu: [
      { href: "/who-we-are", label: "About us" },
      { href: "/who-we-are/our-team", label: "Our Team" },
    ],
  },
  {
    href: "/get-involved",
    label: "Get Involved",
  },
];

export const footerContent = [
  {
    title: "Our organization",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact us", href: "/contact" },
      { label: "Events", href: "/events/upcoming-events" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { href: "/get-involved", label: "Who We Are" },
      { href: "/who-we-are", label: "Get Involved" },
    ],
  },
];

export const homeServiceSectionContent = [
  {
    icon: mentoringPic,
    title: "Mentorship",
    description:
      "Empower the next-gen in engineering through personalized guidance.",
  },
  {
    icon: communityPic,
    title: "Community",
    description: "Join our engineering community for support and growth.",
  },
  {
    icon: techTalkPic,
    title: "Webinars",
    description:
      "Explore cutting-edge topics with industry experts in engineering.",
  },
  {
    icon: volunteeringPic,
    title: "Volunteering",
    description: "Give back to engineering – inspire future leaders.",
  },
];

export const joiningUsContent = [
  {
    title: "Share Your Vision:",
    description:
      "Are you lost and confused about your career choice? Connect with us and share your ideas, passion, and we'll figure it out together.",
  },
  {
    title: "Collaborate with Us:",
    description:
      "Join us in creating a customized program aligned with our mission to empower young women in engineering.",
  },
  {
    title: "Engineering Empowerment:",
    description:
      "Let's establish programs and pathways for young women, nurturing their abilities and enthusiasm for the industry.",
  },
  {
    title: "Shaping the Future:",
    description:
      "With your support, we're preparing to shape a future where every young woman thrives in the world of engineering.",
  },
];

export const homeWhyChooseUsContent = [
  {
    icon: faBoxesStacked,
    title: "Seamless Scalability",
    description: "Software that grows with you",
  },

  {
    icon: faDiagramProject,
    title: "Smooth Transitions",
    description: "Easy adoption of new tech",
  },
  {
    icon: faWindowMaximize,
    title: "Responsive Excellences",
    description: "User-friendly experiences on all devices",
  },
  {
    icon: faRobot,
    title: "Efficient Automation",
    description: "Streamlined productivity",
  },
];

export const aboutUsContent = {
  text1:
    "YCEM, founded in 2022, is dedicated to empowering young females into their engineering careers. Our mission is to bridge the gender gap in Engineering by providing opportunities, guidance, and hands-on experiences. We achieve this through a combination of events, mentorship, and hubs, fostering a supportive ecosystem for the future of young females in technology.",
  text2:
    "Since our start, we've achieved a significant milestone with an event at Accra Girls Secondary School in Ghana. This event was a testament to our commitment to inspiring and encouraging young women to pursue engineering fields. At YCEM, we believe that diversity in engineering leads to innovation, and we're here to make that a reality. Join us on this empowering journey, and together, we'll shape the future of engineering careers for young females.",
};

export const serviceStacks = [
  {
    title: "Fullstack development",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "Web design",
    description: "",
  },
];

export const activities = [
  {
    label: "Empowering Mentorship",
    description:
      "Receive valuable insights, guidance and help from our experienced Engineers who will guide and assist you through your engineering journey with expertise and dedication.",
    icon: faPersonChalkboard,
  },
  {
    label: "Career Advancement",
    description:
      "Access job placement assistance and career resources that open doors to exciting opportunities in the engineering industry, empowering the next generation of female engineers.",
    icon: faRocket,
  },
  {
    label: "Vibrant Community",
    description:
      "Immerse young females in a diverse and collaborative environment, where they can network, share ideas, and grow together with like-minded peers, empowering them to thrive in Engineering.",
    icon: faPeopleCarryBox,
  },
  {
    label: "Innovation Hub",
    description:
      "Fuel creativity in an atmosphere that encourages innovative thinking, pushing young females to explore new horizons in engineering, and empowering them to drive technological innovation.",
    icon: faPenRuler,
  },
  {
    label: "Cutting-edge Skills",
    description:
      "Stay at the forefront of technology with our curriculum designed to equip young females with the latest and most sought-after skills, empowering them to excel in engineering.",
    icon: faToolbox,
  },
  {
    label: "Hands-on Projects",
    description:
      "Translate theory into practice by working on real-world projects, ensuring young females are well-prepared for challenges in the tech world, empowering them to make a meaningful impact.",
    icon: faListCheck,
  },
];
