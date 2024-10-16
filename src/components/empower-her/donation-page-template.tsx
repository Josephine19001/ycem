import React from 'react';
import IntroSection from '../shared/intro-section';
import { Section } from '../shared/containers';

const DonationPageTemplate = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <IntroSection
        title="Empower Her - Support YCEM's Engineering Outreach"
        subTitle="Let's inspire the next Female Engineer by donating to help their education."
        breadcrumbPaths={[
          { label: 'Home', href: '/' },
          { label: 'Donations', href: '/support-us' }
        ]}
      />
      <Section style={{ marginTop: '50px' }}>{children}</Section>
    </div>
  );
};

export default DonationPageTemplate;
