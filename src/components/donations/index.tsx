import React from 'react';
import IntroSection from '../shared/intro-section';
import {
  FlexContainerColumnSpaceBetween,
  FlexContainerRowSpaceBetween,
  Section
} from '../shared/containers';
import Fundraiser from './fundraiser';

const index = () => {
  return (
    <div>
      <IntroSection
        title="Donations"
        subTitle="We appreciate your support. Your donations help us to continue our work and make a difference in the lives of the children we serve."
      />
      <Section style={{ marginTop: '50px' }}>
        <Fundraiser />
      </Section>
    </div>
  );
};

export default index;
