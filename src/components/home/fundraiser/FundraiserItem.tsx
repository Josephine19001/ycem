import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import styled from 'styled-components';
import {
  FlexContainerColumnCenter,
  FlexContainerRowSpaceBetween
} from '../../shared/containers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #eef7ff;
  padding: 16px;
  width: 350px;
  height: 500px;
  text-align: center;
  border-top: 5px solid var(--color-primary);
  position: relative;
  margin-bottom: 24px;
  border-radius: 4px;
`;

const TitleContainer = styled.div`
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 4px 8px;
  position: absolute;
  top: -16px;
`;

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  background-color: #fffefc;
  padding: 8px;
`;

const ProgressBar = styled.div`
  background-color: #02adb5;
  height: 8px;
  position: relative;
  margin-bottom: 8px;
`;

const ProgressLabel = styled.span<{ raised: number; goal: number }>`
  background-color: #02adb5;
  color: #fffefc;
  padding: 4px 8px;
  position: absolute;
  top: -14px;
  left: ${({ raised, goal }) => `${(raised / goal) * 100}%`};
`;

const ImageContainer = styled.div`
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  margin: auto -16px -16px -16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`;

interface IProp {
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  goal: number;
  raised: number;
  link: string;
}

const FundraiserItem = ({
  image,
  title,
  subtitle,
  description,
  goal,
  raised,
  link
}: IProp) => {
  const handleOverlayClick = () => {
    window.open(link);
  };

  return (
    <Container>
      <FlexContainerColumnCenter style={{ marginBottom: '14px' }}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </FlexContainerColumnCenter>

      <ProgressBarContainer>
        <FlexContainerRowSpaceBetween style={{ marginBottom: '24px' }}>
          <span>
            ${goal}{' '}
            <span style={{ color: 'var(--color-primary-darker)' }}>Goal</span>
          </span>
          <span>
            ${raised}{' '}
            <span style={{ color: 'var(--color-primary-darker)' }}>Raised</span>
          </span>
        </FlexContainerRowSpaceBetween>
        <ProgressBar>
          <ProgressLabel goal={goal} raised={raised}>
            {raised}%
          </ProgressLabel>
        </ProgressBar>
      </ProgressBarContainer>

      <ImageContainer>
        <Image style={{ width: '100%' }} priority src={image} alt={subtitle} />
        <Overlay onClick={handleOverlayClick}>
          <span>Read More</span>
        </Overlay>
      </ImageContainer>
    </Container>
  );
};

export default FundraiserItem;
