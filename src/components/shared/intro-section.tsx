import React from 'react';
import styled from 'styled-components';
import {
  FlexContainerColumnCenter,
  FlexContainerRowCenter,
  Input
} from './containers';
import { ButtonPrimary } from './buttons';
import Breadcrumb from './breadcrumb';

const IntroContainer = styled(FlexContainerColumnCenter)`
  display: flex;
  width: calc(100% + 390px);
  margin: 0 -195px;
  padding: 60px 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    padding: 30px 0px;
    gap: 40px;

    width: calc(100% + 48px);
    margin: 0 -24px;
  }
  background-color: var(--color-primary-transparent);
`;

const IntroContentContainer = styled(FlexContainerColumnCenter)`
  display: flex;
  width: 50%;
  padding: 40px 0px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

interface IntroSectionProps {
  title: string;
  subTitle: string;
  shouldShowCTA?: boolean;
  otherCTA?: React.ReactNode;
  handleContactModalOpen?: () => void;
  handleEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  breadcrumbPaths?: { label: string; href: string }[];
}

const IntroSection = ({
  title,
  subTitle,
  shouldShowCTA,
  otherCTA,
  handleEmailChange,
  handleContactModalOpen,
  breadcrumbPaths
}: IntroSectionProps) => {
  return (
    <div>
      <IntroContainer>
        {breadcrumbPaths && <Breadcrumb paths={breadcrumbPaths} />}
        <IntroContentContainer>
          <>
            <h1>{title}</h1>
            <h4 style={{ fontWeight: '400' }}>{subTitle}</h4>
            {shouldShowCTA ? (
              <FlexContainerRowCenter style={{ flexWrap: 'wrap' }}>
                <Input
                  type="email"
                  placeholder="Your email"
                  onChange={handleEmailChange}
                  name="email"
                />
                <ButtonPrimary onClick={handleContactModalOpen}>
                  Get consulting
                </ButtonPrimary>
              </FlexContainerRowCenter>
            ) : null}
            {otherCTA && otherCTA}
          </>
        </IntroContentContainer>
      </IntroContainer>
    </div>
  );
};

export default IntroSection;
