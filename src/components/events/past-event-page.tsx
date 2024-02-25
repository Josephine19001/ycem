import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../shared/containers";

const PageContainer = styled.div``;

const HeroBanner = styled.div``;

const Description = styled.div``;

const Details = styled(FlexContainerRowSpaceBetween)`
  margin-top: 50px;
  align-items: flex-start;
`;

interface Props {
  feedBackLink: string;
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
      <Details>
        <Description>{description}</Description>
      </Details>
    </PageContainer>
  );
};

export default PastEventPage;
