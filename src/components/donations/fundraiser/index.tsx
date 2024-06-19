import React from 'react';
import FundraiserItem from './FundraiserItem';
import { FlexContainerRowSpaceBetween } from '../../shared/containers';
import dunkImage1 from 'public/assets/dunk-1.jpeg';
import dunkImage2 from 'public/assets/dunk-2.jpg';

const Fundraiser = () => {
  return (
    <FlexContainerRowSpaceBetween $gap="24px">
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
        />
      ))}
    </FlexContainerRowSpaceBetween>
  );
};

const fundRaiserContent = [
  {
    title: 'Donation',
    subtitle: 'New Computer Lab (DUNK)',
    description:
      'Help provide a computer lab and training to DUNK. DUNK is a non-profit organization that provides education to underprivileged children in through sports.',
    goal: 2500,
    raised: 955,
    image: dunkImage1,
    link: 'https://www.gofundme.com/f/provide-a-computer-lab-and-training-to-dunk?utm_campaign=p_cp+fundraiser-sidebar&utm_medium=copy_link_all&utm_source=customer'
  }
];

export default Fundraiser;
