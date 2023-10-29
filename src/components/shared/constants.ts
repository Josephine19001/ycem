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
} from "@fortawesome/free-solid-svg-icons";
import blackCode from "../../../public/assets/black-code.jpeg";
import community from "../../../public/assets/community.jpg";
import girlTech from "../../../public/assets/girl-tech.jpg";
import mentor from "../../../public/assets/mentor.jpg";

export const navItems = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/who-we-are",
    label: "Who We Are",
  },
  {
    href: "/get-involve",
    label: "Get Involve",
  },
  {
    href: "/contact",
    label: "Contact us",
  },
];

export const footerContent = [
  {
    title: "Our organization",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { href: "/get-involve", label: "Who We Are" },
      { href: "/who-we-are", label: "Get Involve" },
    ],
  },
];

export const homeServiceSectionContent = [
  {
    icon: mentor,
    title: "Mentoring",
    description:
      "Essentially formulate for how a business is going to completes",
  },

  {
    icon: blackCode,
    title: "Tech Talks",
    description:
      "Essentially formulate for how a business is going to completes",
  },
  {
    icon: community,
    title: "Community",
    description:
      "Essentially formulate for how a business is going to completes",
  },
  {
    icon: girlTech,
    title: "Volunteering",
    description:
      "Essentially formulate for how a business is going to completes",
  },
];

export const joiningUsContent = [
  {
    title: "Share Your Vision:",
    description:
      "Start by connecting with us and sharing your project ideas. We're here to listen and understand your vision.",
  },
  {
    title: "Collaborate with Us:",
    description:
      "Work with us to create a tailored program that aligns with our mission to empower the next generation of female.",
  },
  {
    title: "Empowerment in Action",
    description:
      "we provide empowering STEM experiences for young women in science, technology, engineering, and math.",
  },
  {
    title: "Shaping the Future",
    description:
      "With your support, we prepare to shape a future where every young woman thrives in STEM.",
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
      "Access job placement assistance and career resources that open doors to exciting opportunities in the tech industry, empowering the next generation of female technologists.",
    icon: faRocket,
  },
  {
    label: "Vibrant Community",
    description:
      "Immerse young females in a diverse and collaborative environment, where they can network, share ideas, and grow together with like-minded peers, empowering them to thrive in STEM.",
    icon: faPeopleCarryBox,
  },
  {
    label: "Innovation Hub",
    description:
      "Fuel creativity in an atmosphere that encourages innovative thinking, pushing young females to explore new horizons in technology, and empowering them to drive technological innovation.",
    icon: faPenRuler,
  },
  {
    label: "Cutting-edge Skills",
    description:
      "Stay at the forefront of technology with our curriculum designed to equip young females with the latest and most sought-after skills, empowering them to excel in STEM.",
    icon: faToolbox,
  },
  {
    label: "Hands-on Projects",
    description:
      "Translate theory into practice by working on real-world projects, ensuring young females are well-prepared for challenges in the tech world, empowering them to make a meaningful impact.",
    icon: faListCheck,
  },
];
