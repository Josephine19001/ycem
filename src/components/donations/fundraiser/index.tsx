import React from 'react';
import FundraiserItem from './FundraiserItem';
import { FlexContainerRowSpaceBetween } from '../../shared/containers';
import dunkImage1 from 'public/assets/dunk-1.jpeg';
import studentPic from 'public/student-pic.jpg';

const Fundraiser = () => {
  return (
    <FlexContainerRowSpaceBetween
      $gap="32px"
      style={{ justifyContent: 'flex-start' }}
    >
      {fundRaiserContent.map((content, index) => (
        <FundraiserItem
          key={index}
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          goal={content.goal}
          raised={content.raised}
          image={content.image}
          link={content.link}
          isExternal={content.isExternal}
          isDollar={content.isDollar}
        />
      ))}
    </FlexContainerRowSpaceBetween>
  );
};

const fundRaiserContent = [
  {
    title: 'Donation & Support',
    subtitle: 'Empower Her',
    description:
      'We are launching our "Empower Her" campaign, aimed at supporting engineering students who need financial assistance, mentorship opportunity and general support to excel.',
    goal: 16100,
    raised: 0,
    image: studentPic,
    link: 'support-us/empower-her'
  },
  {
    title: 'Donation',
    subtitle: 'New Computer Lab (DUNK)',
    description:
      'Help provide a computer lab and training to DUNK. DUNK is a non-profit organization that provides education to at-risk women and children through sports, trainings & life skills.',
    goal: 2500,
    raised: 2125,
    image: dunkImage1,
    link: 'https://www.gofundme.com/f/provide-a-computer-lab-and-training-to-dunk?utm_campaign=p_cp+fundraiser-sidebar&utm_medium=copy_link_all&utm_source=customesr',
    isExternal: true,
    isDollar: true
  }
];

export default Fundraiser;
