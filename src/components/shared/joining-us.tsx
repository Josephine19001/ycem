import React from "react";
import styled from "styled-components";
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
} from "./containers";
import { CardTitle, SectionDescription, SectionTitle } from "./typography";
import { joiningUsContent } from "./constants";

const ProcessSection = styled(FlexContainerColumnSpaceBetween)`
  margin-bottom: var(--section-wrapper-margin-bottom);
  margin-top: var(--section-wrapper-margin-top);
  width: calc(100% + 390px);
  margin: 0 -195px;
  background-color: var(--color-primary-transparent);
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: calc(100% + 48px);
    margin: 0 -24px;
  }
  padding: 50px 0;
`;

const ProcessSectionTop = styled(FlexContainerColumnSpaceBetween)`
  gap: 10px;
  align-items: center;
  width: 100%;
`;
const ProcessSectionBottom = styled(FlexContainerRowSpaceBetween)`
  flex-wrap: wrap;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;
const ProcessWrapper = styled(FlexContainerColumnSpaceBetween)<{
  border?: string;
}>`
  gap: 20px;
  align-items: center;
  width: 250px;
  height: 330px;
  background-color: white;
  padding: 20px;
  border: ${({ border }) => (border ? `1px solid white` : "none")};

  h6 {
    font-weight: 600;
    font-size: 15px;
    color: var(--color-primary);
  }
  p {
    color: var(--color-primary);
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const SmallDivider = styled.span`
  width: 50px;
  height: 1.5px;
  background-color: var(--text-color);
`;

const ProcessProgressNumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-primary);
  padding: 4px;
  margin: 10px;
  color: var(--color-light);
  // align-self: flex-end;
`;

interface Props {
  border?: string;
}

const JoiningUs = ({ border }: Props) => {
  return (
    <ProcessSection>
      <FlexContainerColumnSpaceBetween gap="30px" alignitems="flex-start">
        <ProcessSectionTop>
          <SectionTitle style={{ marginTop: "20px" }}>
            Empowering Young Females in STEM
          </SectionTitle>
          <SectionDescription>
            We Empower Young Women in STEM With Us
          </SectionDescription>
        </ProcessSectionTop>
        <ProcessSectionBottom>
          {joiningUsContent.map(({ title, description }, index) => (
            <ProcessWrapper key={title} border={border}>
              <SmallDivider />
              <CardTitle>{title}</CardTitle>
              <p>{description}</p>
              <ProcessProgressNumContainer>
                {index + 1}
              </ProcessProgressNumContainer>
            </ProcessWrapper>
          ))}
        </ProcessSectionBottom>
      </FlexContainerColumnSpaceBetween>
    </ProcessSection>
  );
};

export default JoiningUs;
