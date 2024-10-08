import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FlexContainerRowSpaceBetween } from '../shared/containers';

const PageContainer = styled.div``;

const HeroBanner = styled.div``;

export const Description = styled.div`
  margin-top: 50px;
  align-items: flex-start;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 500;
    color: var(--color-primary);
  }

  h3 {
    font-weight: 500;
    color: var(--color-primary);
  }

  a {
    color: var(--color-primary);
    text-decoration: underline;
    text-transform: lowercase;
  }
`;

interface Props {
  feedBackLink?: string;
  date: string;
  location: string;
  description: any;
  timeDay: string;
  eventBanner: any;
}

const PastEventPage = ({ description, eventBanner }: Props) => {
  return (
    <PageContainer>
      <HeroBanner>
        <Image src={eventBanner} alt="Event banner" />
      </HeroBanner>
      {description}
    </PageContainer>
  );
};

export default PastEventPage;
