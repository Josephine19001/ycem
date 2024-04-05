import React, { useState } from "react";
import styled from "styled-components";
import {
  faLinkedin,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FlexContainerRowSpaceBetween,
  FlexContainerColumnSpaceBetween,
  FlexContainerColumn,
} from "./containers";
import { LogoComponent } from "./topbar";
import { footerContent } from "./constants";
import { FooterButton } from "./buttons";
import ContactFormModal from "./contact-form-modal";

const Container = styled(FlexContainerColumnSpaceBetween)`
  padding: 0 190px;
  background-color: var(--color-primary);
  align-items: flex-start;
  gap: 0;
  @media only screen and (max-width: 768px) {
    padding: 0 32px;
    h5: {
      font-weight: 800;
    }
  }
`;

const CustomizedIcon = styled(FontAwesomeIcon)`
  color: var(--color-light);
  &:hover {
    color: var(--color-primary-darker);
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;

const LogoAndSocialContainer = styled(FlexContainerRowSpaceBetween)`
  width: 100%;
  padding: 50px 0;
`;
const NavigationContainer = styled(FlexContainerRowSpaceBetween)`
  align-items: flex-start;
  gap: 30px;
  padding: 50px 0;
  width: 100%;
`;
const NavigationItemsWrapper = styled(FlexContainerColumn)`
  width: 150px;
  a {
    font-weight: 400;
  }
  @media (max-width: 768px) {
    width: 100px;
    button {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }
  @media (max-width: 367px) {
    width: 100%;
  }
`;

const GetStartedSection = styled(NavigationItemsWrapper)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Link = styled.a`
  font-size: var(--font-size-md);
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: var(--color-light);
`;

const CopyrightContainer = styled.div`
  width: calc(100% + 2 * 195px);
  padding: 20px 195px;
  p {
    color: var(--color-light);
  }
  background-color: var(--color-primary-darker);
  margin: 0 -195px;
`;

const SocialItemsWrapper = styled(FlexContainerRowSpaceBetween)`
  align-self: center;
  gap: 20px;
  @media (max-width: 768px) {
    margin-top: 1em;
    justify-content: center;
  }
`;

export const Divider = styled.div<{ margin?: string }>`
  width: 100%;
  height: 0.2px;
  background-color: var(--color-primary);
  margin: ${({ margin }) => (margin ? margin : `0px`)};
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Footer = () => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer>
      <Container>
        <LogoAndSocialContainer>
          <LogoComponent footer={true} />
          <SocialItemsWrapper>
            <a
              href="https://instagram.com/ycem_org?igshid=Y2JoMjh6d3Y1Y3Jz"
              target="_blank"
            >
              <CustomizedIcon icon={faInstagramSquare} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/company/your-choice-in-engineering-matters-ycem/mycompany/"
              target="_blank"
            >
              <CustomizedIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.youtube.com/@YCEMGh" target="_blank">
              <CustomizedIcon icon={faYoutubeSquare} size="2x" />
            </a>
          </SocialItemsWrapper>
        </LogoAndSocialContainer>
        <Divider style={{ backgroundColor: "var(--color-light)" }} />
        <NavigationContainer>
          {footerContent.map(({ title, links }) => {
            return (
              <NavigationItemsWrapper key={title}>
                <h5
                  style={{ marginBottom: "10px", color: "var(--color-light)" }}
                >
                  {title}
                </h5>
                <FlexContainerColumn $gap="5px">
                  {links.map(({ label, href }) => (
                    <Link key={label} href={href}>
                      {label}
                    </Link>
                  ))}
                </FlexContainerColumn>
              </NavigationItemsWrapper>
            );
          })}
          <GetStartedSection>
            <h5 style={{ marginBottom: "10px", color: "var(--color-light)" }}>
              Get In Touch
            </h5>
            <input
              type="text"
              placeholder="Your email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <FooterButton
              style={{
                marginTop: "5px",
                backgroundColor: "var(--color-light)",
                color: "var(--color-primary)",
              }}
              onClick={() => setOpenContactModal(true)}
            >
              Get started
            </FooterButton>
          </GetStartedSection>
        </NavigationContainer>
        <CopyrightContainer>
          <p>
            ©2024 YCEM - Your Choice In Engineering Matters. All Rights
            Reserved.
          </p>
        </CopyrightContainer>
      </Container>
      {openContactModal && (
        <ContactFormModal
          open={openContactModal}
          email={email}
          handleCloseModal={() => setOpenContactModal(false)}
        />
      )}
    </footer>
  );
};

export default Footer;
