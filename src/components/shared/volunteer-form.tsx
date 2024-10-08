import React from 'react';
import styled from 'styled-components';

const VolunteerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 5px;

  font-size: var(--font-size-md);
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.2px;

  background: var(--color-primary);
  color: var(--color-light);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    color: var(--color-light);
  }
`;

const VolunteerSection = () => {
  return (
    <VolunteerContainer>
      <h2>Become a Volunteer</h2>
      <p>
        We are always looking for dedicated volunteers to join our team. Click
        the button below to apply.
      </p>
      <Button
        href="https://g4urvcldb4j.typeform.com/to/vHjnmF49"
        target="_blank"
      >
        Apply Now
      </Button>
    </VolunteerContainer>
  );
};

export default VolunteerSection;
